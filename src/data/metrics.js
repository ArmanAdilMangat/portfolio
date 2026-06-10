export const LINKS = {
  email: "aadilmangat@gmail.com",
  github: "https://github.com/ArmanAdilMangat",
  linkedin: "https://linkedin.com/in/armanadilmangat",
  huggingface: "https://huggingface.co/ArmanXAI",
  bertDemo: "https://huggingface.co/spaces/ArmanXAI/ag-news-classifier-demo",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  chatApi: "https://armanxai-aria-chatbot.hf.space",
};

export const METRICS = [
  { value: 94.74, decimals: 2, suffix: "%", label: "BERT accuracy — AG News fine-tune" },
  { value: 99.03, decimals: 2, suffix: "%", label: "CNN-LSTM IDS accuracy — CICIDS-2017" },
  { value: 22, prefix: "$", label: "GENIE total hardware cost" },
  { value: 15, prefix: "8–", suffix: "s", label: "Offline voice latency, end-to-end" },
];
