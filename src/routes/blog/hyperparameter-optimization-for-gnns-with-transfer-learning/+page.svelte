<script lang="ts">
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import EmphasisedBox from "$lib/components/EmphasisedBox.svelte";
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import InlineCode from "$lib/components/InlineCode.svelte";
  import InlineMath from "$lib/components/InlineMath.svelte";
  import MathBlock from "$lib/components/MathBlock.svelte";
  import PageContentBox from "$lib/components/PageContentBox.svelte";
</script>

<PageContentBox>
  <header>
    <h1>
      Hyperparameter Optimization for Graph Neural Networks with Transfer
      Learning
    </h1>
  </header>

  <p>
    <em
      >Based on "Benchmarking and Transfer Learning for Hyperparameter
      Optimization of Graph Neural Networks" – Dědič &amp; Bělohlávek, ICAART
      2026.</em
    >
  </p>

  <!-- ================================================================ -->
  <h2>The Hyperparameter Tuning Problem for GNNs</h2>

  <p>
    <strong>Hyperparameter optimization</strong> (HPO) is the process of finding
    the right settings that control <em>how</em> a model trains (e.g. learning rate,
    regularization strength, network width...) as opposed to the parameters the model
    adjusts automatically during training. Unlike ordinary parameters, hyperparameters
    can't be tuned by gradient descent: there's no gradient to follow. Instead, the
    whole training run is a black box, and you have to search from the outside. Each
    evaluation means running a full training job, which can take anywhere from seconds
    to hours.
  </p>

  <p>
    HPO is hard enough for standard neural networks. It gets significantly worse
    for <strong>Graph Neural Networks</strong> (GNNs). GNNs expose more interacting
    hyperparameters than typical architectures, are trained on graphs that can be
    slow and memory-intensive to process, and are increasingly used in domains where
    squeezing out the last bit of performance matters, such as network security, molecular
    biology, recommendation systems. At the same time, the GNN HPO literature is surprisingly
    fragmented: existing studies typically cover a handful of datasets in a narrow
    domain, making it difficult to draw general conclusions. This paper addresses
    that gap with a systematic benchmark, and goes a step further by proposing a method
    that reuses HPO knowledge across datasets.
  </p>

  <!-- ================================================================ -->
  <h2>Graph Neural Networks Overview</h2>

  <p>
    Many real-world datasets are not tables of independent rows but <em
      >graphs</em
    >: collections of entities (nodes) connected by relationships (edges). A
    citation network is a graph – papers are nodes, citations are edges. So are
    social networks, protein interaction maps, and computer network topologies.
  </p>

  <p>
    GNNs learn from these relational structures by passing <strong
      >messages between neighbouring nodes</strong
    >. In each layer, every node gathers feature vectors from its neighbours,
    combines them (via aggregation, e.g., taking the mean or the maximum), and
    updates its own representation. After a few such rounds, each node holds a
    compact embedding that reflects both its own attributes <em>and</em> the
    broader neighbourhood context. The model used in this paper is
    <strong>GraphSAGE</strong>, a popular and well-studied variant that samples
    a fixed-size neighbourhood at each layer and aggregates it.
  </p>

  <p>
    The task is <strong>node classification</strong>: given the graph and the
    embeddings, predict a label for each node (e.g., the research field of a
    paper, or the type of a network host).
  </p>

  <!-- ================================================================ -->
  <h2>The Hyperparameter Problem for GNNs</h2>

  <p>
    GNNs expose a larger-than-usual set of hyperparameters, and many of them
    interact in non-obvious ways. The paper benchmarks eight hyperparameters for
    GraphSAGE:
  </p>

  <ul>
    <li>
      <strong>Architecture:</strong> number of layers (1-3), hidden layer width (16-512
      neurons depending on dataset size), aggregation function (mean vs. max)
    </li>
    <li>
      <strong>Optimization:</strong> optimizer (Adam vs. AdamW), learning rate (three
      logarithmically-spaced choices), number of epochs (fixed per dataset size)
    </li>
    <li>
      <strong>Regularization:</strong> dropout rate (0 or 0.5), L<sub>2</sub> weight
      decay (two or three choices depending on dataset size)
    </li>
    <li><strong>Activation function:</strong> ReLU vs. PReLU</li>
  </ul>

  <p>
    Even with these relatively small per-parameter ranges, the combined search
    space is large and evaluating a single configuration means training a
    GraphSAGE model to convergence. Exhaustive search over all combinations is
    completely infeasible.
  </p>

  <EmphasisedBox>
    <p>
      <strong>The HPO problem, formally.</strong> Given a labelled dataset <InlineMath
        src={String.raw`\mathcal{D}`}
      />, a learning algorithm <InlineMath src={String.raw`\mathscr{F}`} /> parameterized
      by hyperparameters <InlineMath
        src={String.raw`\lambda \in \tilde{\Lambda}`}
      /> (the search space), and a performance metric <InlineMath
        src={String.raw`\rho`}
      /> (here, the F1-score), an HPO method is a function <InlineMath
        src={String.raw`\tau`}
      /> that at each step proposes the next configuration to evaluate:
    </p>
    <MathBlock
      src={String.raw`\hat{\lambda} = \tau\!\left(\mathcal{D},\, \mathscr{F},\, \tilde{\Lambda},\, \rho\right)`}
    />
    <p>
      The goal is to find <InlineMath
        src={String.raw`\lambda^* = \arg\max_{\lambda \in \tilde{\Lambda}}\, \rho\!\left(\mathcal{D},\, \hat{f}_\lambda\right)`}
      /> using as few evaluations as possible.
    </p>
  </EmphasisedBox>

  <!-- ================================================================ -->
  <h2>How Do You Search Efficiently? – Common HPO Methods</h2>

  <p>
    There is a spectrum of HPO strategies, ranging from naive to sophisticated.
    We evaluated five:
  </p>

  <p>
    <strong>Grid Search</strong> exhaustively evaluates a pre-defined grid of hyperparameter
    values. Simple, reproducible, and easy to parallelise, but the grid must be fixed
    in advance, it scales exponentially with the number of dimensions, and it cannot
    adapt based on what it has learned so far.
  </p>

  <p>
    <strong>Random Search</strong> samples configurations uniformly at random. Surprisingly
    competitive: it allocates more budget to truly varying dimensions than grid search
    does (which wastes evaluations on duplicated values along fixed axes), and it
    requires no prior knowledge of which values are promising.
  </p>

  <p>
    <strong>Bayesian Optimization (BO)</strong> builds a
    <em>surrogate model</em>
    of the performance landscape – a cheap probabilistic approximation of the expensive
    objective function. After each trial, it updates the surrogate and uses an
    <em>acquisition function</em> to select the next point that best balances exploring
    unknown regions and exploiting regions that look promising. BO learns from its
    history and tends to focus evaluations where they matter.
  </p>

  <p>
    <strong>Tree-structured Parzen Estimator (TPE)</strong> is a close relative
    of BO, also from the SMBO family (Sequential Model-Based Optimization).
    Instead of modelling the performance surface directly, TPE models the
    density of <em>good</em> configurations and the density of <em>bad</em> ones separately
    using kernel density estimators (Parzen windows), then selects configurations
    where the good-to-bad density ratio is highest. It's the default sampler in the
    popular Optuna framework.
  </p>

  <p>
    <strong>Sobol Quasi-Monte Carlo (QMC)</strong> uses a deterministic low-discrepancy
    sequence to cover the search space more uniformly than pseudo-random sampling.
    The idea is that better space coverage should mean fewer wasted evaluations. Like
    random search, it does not learn from previous results.
  </p>

  <p>All five methods share the same outer loop:</p>

  <CodeBlock
    code={String.raw`history = []
while budget_remaining():
  λ = sampler.suggest(history)          # pick the next configuration
  score = train_and_evaluate(model, λ)  # this is expensive!
  history.append((λ, score))
return best(history)`}
  />

  <p>
    The difference between methods is entirely in <InlineCode
      >sampler.suggest</InlineCode
    > e.g. whether it takes the history into account.
  </p>

  <!-- ================================================================ -->
  <h2>The Benchmark – What Was Tested</h2>

  <p>
    To get a reliable picture, we ran all five methods on nine standard graph
    datasets spanning a wide range of sizes and structures:
  </p>

  <table>
    <thead>
      <tr><th>Dataset</th><th>#Nodes</th><th>#Edges</th><th>#Classes</th></tr>
    </thead>
    <tbody>
      <tr><td>Cora</td><td>2,708</td><td>10,556</td><td>7</td></tr>
      <tr><td>CiteSeer</td><td>3,327</td><td>9,104</td><td>6</td></tr>
      <tr><td>Squirrel</td><td>5,201</td><td>198,493</td><td>5</td></tr>
      <tr><td>PubMed</td><td>19,717</td><td>88,648</td><td>3</td></tr>
      <tr><td>CoraFull</td><td>19,793</td><td>126,842</td><td>70</td></tr>
      <tr><td>DBLP</td><td>17,716</td><td>105,734</td><td>4</td></tr>
      <tr><td>Computers</td><td>13,752</td><td>491,722</td><td>10</td></tr>
      <tr><td>Flickr</td><td>89,250</td><td>899,756</td><td>7</td></tr>
      <tr><td>ArXiv</td><td>169,343</td><td>1,166,243</td><td>40</td></tr>
    </tbody>
  </table>

  <p>
    Each method-dataset combination is run <strong>10 independent times</strong>
    (to account for randomness in both training and the HPO samplers) and stopped
    either when no improvement is seen for <em>M</em> consecutive trials
    (patience) or when a wall-clock budget of <em>T</em> hours is exhausted. The reported
    metric is macro F1-score on a held-out test set. This systematic design – 5 methods
    × 9 datasets × 10 runs – is the comprehensive benchmark that was previously missing
    from the literature.
  </p>

  <!-- ================================================================ -->
  <h2>Benchmark Results – What Works?</h2>

  <p>
    The results are in Table 1 below. Bold indicates the best method per
    dataset; underline indicates second best.
  </p>

  <table>
    <thead>
      <tr>
        <th>Dataset</th>
        <th>Random</th>
        <th>Grid</th>
        <th>BO</th>
        <th>TPE</th>
        <th>QMC</th>
      </tr>
    </thead>
    <tbody>
      <tr
        ><td>Cora</td> <td>0.8560</td> <td>0.8491</td>
        <td class="best">0.8747</td> <td class="second">0.8659</td>
        <td>0.8351</td></tr
      >
      <tr
        ><td>CiteSeer</td> <td>0.7146</td> <td>0.7046</td>
        <td class="second">0.7172</td><td class="best">0.7236</td>
        <td>0.7089</td></tr
      >
      <tr
        ><td>Squirrel</td> <td class="second">0.3659</td><td>0.3605</td>
        <td>0.3544</td> <td class="best">0.3755</td> <td>0.3549</td></tr
      >
      <tr
        ><td>PubMed</td> <td>0.8515</td> <td>0.8457</td>
        <td class="best">0.8825</td> <td class="second">0.8643</td>
        <td>0.8596</td></tr
      >
      <tr
        ><td>CoraFull</td> <td>0.6211</td> <td>0.6371</td>
        <td class="second">0.6450</td><td class="best">0.6555</td>
        <td>0.6385</td></tr
      >
      <tr
        ><td>DBLP</td> <td>0.8051</td> <td>0.7996</td>
        <td class="best">0.8118</td> <td>0.8085</td>
        <td class="second">0.8088</td></tr
      >
      <tr
        ><td>Computers</td> <td>0.6973</td> <td>0.5999</td>
        <td class="best">0.8945</td> <td class="second">0.8047</td>
        <td>0.7428</td></tr
      >
      <tr
        ><td>Flickr</td> <td>0.0864</td> <td>0.0961</td>
        <td class="best">0.1908</td> <td class="second">0.1460</td>
        <td>0.1069</td></tr
      >
      <tr
        ><td>ArXiv</td> <td>0.3950</td> <td>0.3796</td>
        <td class="second">0.3987</td><td class="best">0.4098</td>
        <td>0.3955</td></tr
      >
    </tbody>
  </table>

  <p>
    <em
      >Table 1. Final macro F1-scores averaged over 10 independent runs. <strong
        >Bold</strong
      >: best. <u>Underline</u>: second best.</em
    >
  </p>

  <p>
    Three patterns stand out clearly. First, <strong
      >SMBO methods (BO and TPE) win consistently</strong
    >. In seven out of nine datasets, both top spots go to BO or TPE. On the
    Squirrel dataset, random search sneaks into second place; on DBLP, Sobol QMC
    does. But the overall picture is clear: methods that learn from their
    history outperform methods that don't. Importantly, the advantage of BO and
    TPE only becomes visible after about 10 trials – there's an initial warm-up
    period while the surrogate model is built from scratch. Before that, all
    methods are roughly equivalent.
  </p>

  <p>
    Second, <strong>random search is a surprisingly solid baseline</strong>. It
    consistently trails SMBO by only a small margin. The two exceptions are
    Computers and Flickr, where BO dominates with F1 scores more than 0.09
    points higher than random – a substantial gap in practice. These datasets
    appear to have a more complex performance landscape that rewards smarter
    search.
  </p>

  <p>
    Third, <strong>Sobol QMC underperforms</strong>. Despite its theoretical
    appeal for better space coverage, it never wins on any dataset and
    consistently ranks below SMBO. Better coverage of the search space doesn't
    help if you're ignoring the information each trial gives you.
  </p>

  <!-- ================================================================ -->
  <h2>The Meta-Learning Idea – Learning Across Datasets</h2>

  <p>
    BO and TPE are good, but they start from scratch on every new dataset. Every
    HPO run begins with no knowledge of what worked before. A human expert
    tuning their fifth GNN this month would do better than one tuning their
    first, because they have intuitions about what tends to work. Can we give a
    machine that same advantage?
  </p>

  <p>
    The key observation is that <strong
      >graph datasets have measurable structural fingerprints</strong
    >. You can describe any graph dataset by a vector of numerical properties:
    how many nodes, how many edges, how densely connected, and crucially, how
    much the graph's topology aligns with the classification task. Two datasets
    with similar fingerprints might respond similarly to the same hyperparameter
    settings. If we've tuned a GNN on eight datasets before, we already have a
    wealth of evidence about which hyperparameter configurations perform well on
    which kinds of graphs.
  </p>

  <p>
    The paper's proposal: build a <strong>meta-model</strong> that learns to predict,
    given a dataset's structural fingerprint and a hyperparameter configuration, what
    F1-score you'd get. This meta-model is cheap to evaluate – it's just a Random
    Forest, not a GNN training run. So you can use it to pre-rank all candidate configurations
    and start HPO from the most promising one, rather than starting blindly.
  </p>

  <p>
    If past experience shows that high-dropout configurations work well on
    dense, high-homophily graphs, and your new dataset is also dense and
    high-homophily, why not start there?
  </p>

  <!-- ================================================================ -->
  <h2>How Cross-RF Works</h2>

  <h3>Dataset descriptors</h3>

  <p>
    Each dataset is represented by a descriptor vector <InlineMath
      src={String.raw`\delta(\mathcal{D}) \in \mathbb{R}^{21}`}
    /> capturing three categories of graph properties:
  </p>

  <ul>
    <li>
      <strong>Structure (topology):</strong> node count, edge count, number of connected
      components, average node degree, global assortativity (tendency for nodes to
      connect to similar-degree nodes)
    </li>
    <li>
      <strong>Structure &amp; attributes:</strong> average cosine similarity of node
      feature vectors across all edges
    </li>
    <li>
      <strong>Structure, attributes &amp; labels (task-specific):</strong> a
      suite of <em>homophily</em> measures – edge homophily, node homophily, class
      homophily, adjusted homophily, attribute homophily, node label informativeness,
      plus structural statistics specific to each class (positive node degree, presence
      of positive edges, etc.)
    </li>
  </ul>

  <p>
    <strong>Homophily</strong> is perhaps the most important concept here. In a
    citation network, papers tend to cite papers in the same field – edges
    mostly connect nodes of the same class. That's <em>high homophily</em>. In
    some social networks or heterophilic graphs (like Squirrel, which encodes a
    Wikipedia page-to-page network), connected nodes often belong to
    <em>different</em> classes – that's <em>low homophily</em>. GNNs behave very
    differently in these two regimes: averaging neighbour features is helpful
    when neighbours share the same label, but actively harmful when they don't.
    Homophily is therefore highly predictive of which GNN configurations will
    work.
  </p>

  <h3>The meta-model and the HPO rule</h3>

  <p>
    A <strong>Random Forest regressor</strong>
    <InlineMath src={String.raw`\mathcal{M}_\rho`} /> is trained on a meta-dataset
    <InlineMath src={String.raw`\mathcal{H}`} /> of past runs, where each record is
    a tuple of (dataset properties, hyperparameter configuration, observed F1-score):
  </p>

  <MathBlock
    src={String.raw`\mathcal{M}_\rho : \mathbb{R}^{21} \times \tilde{\Lambda} \to \mathbb{R}`}
  />

  <p>
    To tune hyperparameters on a new dataset <InlineMath
      src={String.raw`\mathcal{D}_\text{new}`}
    />, the method simply picks the configuration that the meta-model predicts
    will score highest:
  </p>

  <MathBlock
    src={String.raw`\tau\!\left(\mathcal{D}_\text{new},\, \mathscr{F},\, \tilde{\Lambda},\, \rho\right) = \arg\max_{\lambda\,\in\,\tilde{\Lambda}}\; \mathcal{M}_\rho\!\left(\delta(\mathcal{D}_\text{new}),\, \lambda\right)`}
  />

  <p>
    Because evaluating a Random Forest is essentially free compared to training
    a GNN, you can score every candidate configuration in the search space and
    pick the globally best one. No expensive model training is needed for the
    initial ranking.
  </p>

  <h3>Evaluation with leave-one-dataset-out</h3>

  <p>
    While in practice you'd use Cross-RF on a new, unseen dataset, for the
    purposes of our evaluation, we chose a leave-one-out style experiment. The
    meta-model for a given target dataset is trained on all runs from the <em
      >other</em
    >
    eight datasets. Cross-RF has never seen the target dataset during training, so
    its initial recommendation is genuinely a <em>zero-shot transfer</em> from past
    experience. The Random Forest uses 100 trees and considers 30% of features at
    each split (standard scikit-learn defaults). Categorical hyperparameters (activation
    function, optimizer, aggregation) are one-hot encoded.
  </p>

  <!-- ================================================================ -->
  <h2>Meta-Learning Results</h2>

  <p>
    Cross-RF is compared only to BO and TPE – the best methods from the
    benchmark. The results are in Table 2.
  </p>

  <table>
    <thead>
      <tr>
        <th>Dataset</th>
        <th>BO</th>
        <th>TPE</th>
        <th>Cross-RF</th>
      </tr>
    </thead>
    <tbody>
      <tr
        ><td>Cora</td> <td class="best">0.8747</td> <td>0.8659</td>
        <td class="second">0.8727</td></tr
      >
      <tr
        ><td>CiteSeer</td> <td class="second">0.7172</td>
        <td class="best">0.7236</td> <td>0.7095</td></tr
      >
      <tr
        ><td>Squirrel</td> <td>0.3544</td> <td class="second">0.3755</td>
        <td class="best">0.3769</td></tr
      >
      <tr
        ><td>PubMed</td> <td class="best">0.8825</td> <td>0.8643</td>
        <td class="second">0.8807</td></tr
      >
      <tr
        ><td>CoraFull</td> <td class="second">0.6450</td>
        <td class="best">0.6555</td> <td>0.6426</td></tr
      >
      <tr
        ><td>DBLP</td> <td class="second">0.8118</td> <td>0.8085</td>
        <td class="best">0.8123</td></tr
      >
      <tr
        ><td>Computers</td><td class="second">0.8945</td> <td>0.8047</td>
        <td class="best">0.9023</td></tr
      >
      <tr
        ><td>Flickr</td> <td class="second">0.1908</td> <td>0.1460</td>
        <td class="best">0.1956</td></tr
      >
      <tr
        ><td>ArXiv</td> <td>0.3987</td> <td class="best">0.4098</td>
        <td class="second">0.4094</td></tr
      >
    </tbody>
  </table>

  <p>
    <em
      >Table 2. Final macro F1-scores for BO, TPE, and Cross-RF, averaged over
      10 independent runs. <strong>Bold</strong>: best.
      <u>Underline</u>: second best.</em
    >
  </p>

  <p>
    Cross-RF achieves the <strong
      >best final performance on 4 out of 9 datasets</strong
    >
    (Squirrel, DBLP, Computers, Flickr) and is second best on another 3 (Cora, PubMed,
    ArXiv). It only falls behind both reference methods on CiteSeer and CoraFull.
    The overall average rank is <strong>1.78 for Cross-RF</strong> versus 2.0 for
    BO and 2.22 for TPE – a consistent advantage.
  </p>

  <p>
    The largest wins are on Computers and Flickr – exactly the datasets where
    SMBO already had a large advantage over random search. These are the harder
    datasets, where the performance landscape has clear structure that rewards
    prior knowledge. A method that already knows where to look on such datasets,
    before collecting any data on them, is doing something genuinely useful. The
    two failure cases (CiteSeer, CoraFull) suggest the limits: transferring
    knowledge from eight datasets won't always match a method that adapts
    entirely to the dataset at hand.
  </p>

  <!-- ================================================================ -->
  <h2>Takeaways for Practitioners</h2>

  <p>
    If you're tuning a GNN today, a few practical conclusions follow from this
    work:
  </p>

  <ul>
    <li>
      <strong>Use BO or TPE, not grid search.</strong> Both are available out of
      the box in <ExternalLink href="https://optuna.org">Optuna</ExternalLink> and
      consistently outperform grid and random search on all but the smallest problems.
      There's no good reason to default to grid search for GNN HPO.
    </li>
    <li>
      <strong>Don't bother with Sobol QMC</strong> as a primary strategy. Despite
      the theoretical motivation for better space coverage, it underperforms in practice
      on GNN tasks compared to SMBO and even random search on smaller datasets.
    </li>
    <li>
      <strong>Random search is still a reasonable baseline</strong> when you have
      very few evaluations available (under ~10 trials), since SMBO methods need time
      to build their surrogate models before they start paying off.
    </li>
    <li>
      <strong>Cross-RF was implemented as a standard Optuna sampler.</strong> In principle,
      it can be dropped into any Optuna-based HPO pipeline and immediately leverages
      the knowledge from these nine benchmark datasets – no retraining needed for
      new datasets of similar type.
    </li>
    <li>
      The core enabler is the <strong>graph descriptor</strong>: a dataset's
      structural fingerprint (node count, degree statistics, homophily measures,
      etc.) is both cheap to compute and genuinely predictive of what
      hyperparameter regime will work. If you can characterize your dataset in
      these terms, you can get a smarter starting point for free.
    </li>
  </ul>

  <!-- ================================================================ -->
  <h2>What's Next</h2>

  <p>
    This work focused on GraphSAGE and macro F1-score across nine datasets – a
    solid first systematic benchmark, but there's plenty of room to grow.
    Immediate extensions include testing other GNN architectures (GAT, GCN, GIN)
    and other performance metrics (AUC-ROC, accuracy). A particularly
    interesting longer-term direction is pre-training the meta-model on <em
      >synthetic</em
    >
    graphs generated from known probabilistic models (Erdős-Rényi graphs, stochastic
    block models), which could remove the dependence on having a large collection
    of real benchmark datasets as training data. Another direction is incorporating
    Cross-RF as a <em>surrogate model inside</em> an SMBO loop – combining the warm-start
    advantage of meta-learning with the adaptive refinement of Bayesian optimization
    for an even tighter integration of past knowledge and current observations.
  </p>
</PageContentBox>

<style>
  .best {
    font-weight: bold;
  }

  .second {
    text-decoration: underline;
  }
</style>
