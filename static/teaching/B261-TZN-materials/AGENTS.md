# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Project Overview

This is the **NI-TZN (Theoretical Fundamentals of Neural Networks)** course at CTU Prague (ČVUT). The working directory contains Jupyter notebooks for 5 tutorials and their associated datasets. Course content is primarily in Czech.

## Environment Setup

Dependencies are managed with [`uv`](https://docs.astral.sh/uv/). Python 3.11 is pinned via `.python-version`.

```sh
uv sync                   # install all dependencies from uv.lock
uv sync --dev             # include dev dependencies (ipykernel for Jupyter)
```

## Running Notebooks

```sh
uv run jupyter lab        # start JupyterLab
uv run jupyter notebook   # start classic Notebook UI

# Execute a notebook non-interactively
uv run jupyter nbconvert --to notebook --execute TZN-01.ipynb
```

## Repository Structure

```
tutorials/files/
├── TZN-0X.ipynb            # Student exercise notebooks (some cells left blank)
├── TZN-0X-solutions.ipynb  # Complete solution notebooks (exist for TZN-01, TZN-02)
├── TZN-05-presentation/    # LaTeX source + compiled PDF for tutorial 4
├── data/                   # Datasets: MNIST and Cora (git-ignored, ~80 MB)
├── pyproject.toml          # Project dependencies (torch, torch-geometric, torchvision, etc.)
└── uv.lock                 # Pinned dependency lockfile
```

## Tutorial Topics

| # | Topic |
|---|-------|
| 1 | Intro to NNs — ML basics, autodiff, architectures, gradient descent, activation functions |
| 2 | Optimization — SGD, Momentum, Nesterov, Adagrad, Adadelta, Adam, AdamW |
| 3 | Regularization — train/test split, overfitting, L1/L2, dropout, batching, cross-validation |
| 4 | RNNs & Language Models — RNNs, NLP, attention, transformers |
| 5 | Graph Neural Networks — graph learning, random walks, graph convolutions |

## Key Dependencies

- **PyTorch** (`torch`, `torchvision`) — core deep learning framework
- **PyTorch Geometric** (`torch-geometric`, `torch-cluster`) — graph neural network library (tutorial 5)
- **scikit-learn**, **numpy**, **matplotlib** — classical ML utilities and visualization

## Architecture Notes

- Exercise notebooks (`TZN-0X.ipynb`) intentionally leave certain cells blank or partially filled for students to complete.
- Solution notebooks are the authoritative reference for correct implementations.
- The `data/` directory is git-ignored; datasets are downloaded on first notebook run via `torchvision.datasets` and `torch_geometric.datasets`.
