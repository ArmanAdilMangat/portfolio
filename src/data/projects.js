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
    title: "Intrusion Detection Benchmark",
    metric: "Random Forest 99.93% · CNN 99.60%",
    desc: "Random Forest vs CNN, MLP and a CNN-LSTM hybrid on CICIDS-2017 network flows. The classical baseline matched the deep models; limitations (duplicates, random split) documented.",
    tags: ["Scikit-learn", "TensorFlow", "CICIDS-2017", "Security"],
    link: LINKS.idsRepo,
    linkLabel: "GitHub →",
  },
  {
    title: "Support-Ticket Auto-Tagger",
    metric: "47.3% → 98.2% → 99.82%",
    desc: "Zero-shot BART-MNLI vs few-shot SetFit (8 per class) vs fine-tuned DistilBERT on 11 ticket classes, 550 held-out tickets, with a reproducible comparison report.",
    tags: ["DistilBERT", "SetFit", "Zero-shot", "Benchmarking"],
    link: LINKS.internshipRepo,
    linkLabel: "GitHub →",
  },
  {
    title: "Customer Churn Pipeline",
    metric: "Production Scikit-learn pipeline",
    desc: "End-to-end churn prediction on IBM Telco: ColumnTransformer preprocessing + GridSearchCV (5-fold, F1) over LogReg & Random Forest.",
    tags: ["Scikit-learn", "GridSearchCV", "EDA"],
    link: LINKS.internshipRepo,
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
];
