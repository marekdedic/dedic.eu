declare global {
  namespace App {
    interface PageData {
      description?: string;
      ogType?: "article" | "website";
      title?: string;
    }
  }
}

export {};
