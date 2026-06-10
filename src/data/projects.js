import { LINKS } from "./metrics.js";

export const PROJECTS = [
  {
    title: "BERT AG-News Classifier",
    metric: "94.74% acc · 94.75 macro F1",
    desc: "Fine-tuned bert-base-uncased on 120K AG News samples with HuggingFace Trainer, fp16 on RTX 4060. Deployed as a live Gradio demo.",
    tags: ["PyTorch", "HuggingFace", "fp16", "Gradio"],
    link: LINKS.bertDemo,
    linkLabel: "Live demo →",
  },
  {
    title: "CNN-LSTM Intrusion Detection (Research)",
    metric: "99.03% acc · 5× faster training",
    desc: "Hybrid CNN-LSTM IDS with NSGA-II Jumping-Gene multi-objective feature selection on CICIDS-2017. Independent research paper.",
    tags: ["PyTorch", "NSGA-II", "CICIDS-2017", "IoT Security"],
    link: LINKS.github,
    linkLabel: "GitHub →",
  },
  {
    title: "LLM Support-Ticket Auto-Tagger",
    metric: "99.82% accuracy",
    desc: "Benchmarked zero-shot vs few-shot vs fine-tuned LLMs for ticket classification with a reproducible comparison report.",
    tags: ["LLM", "Fine-tuning", "Benchmarking"],
    link: LINKS.github,
    linkLabel: "GitHub →",
  },
  {
    title: "Customer Churn Pipeline",
    metric: "Production Scikit-learn pipeline",
    desc: "End-to-end churn prediction on IBM Telco: ColumnTransformer preprocessing + GridSearchCV (5-fold, F1) over LogReg & Random Forest.",
    tags: ["Scikit-learn", "GridSearchCV", "EDA"],
    link: LINKS.github,
    linkLabel: "GitHub →",
  },
  {
    title: "EmotionCNN",
    metric: "CPU vs GPU benchmark",
    desc: "Happy/Sad facial classifier built from scratch in PyTorch (64×64 grayscale) with a full RTX 4060 training/inference benchmark.",
    tags: ["PyTorch", "CNN", "CUDA"],
    link: LINKS.github,
    linkLabel: "GitHub →",
  },
  {
    title: "Health Query Chatbot",
    metric: "LLaMA 3.1 8B via Groq",
    desc: "Healthcare-domain conversational prototype combining Groq inference with HuggingFace tooling.",
    tags: ["LLaMA 3.1", "Groq", "HuggingFace"],
    link: LINKS.github,
    linkLabel: "GitHub →",
  },
];
