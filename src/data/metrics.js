export const LINKS = {
  email: "aadilmangat@gmail.com",
  github: "https://github.com/ArmanAdilMangat",
  linkedin: "https://linkedin.com/in/armanadilmangat",
  huggingface: "https://huggingface.co/ArmanXAI",
  genieRepo: "https://github.com/ArmanAdilMangat/GENIE",
  idsRepo: "https://github.com/ArmanAdilMangat/Research-paper",
  internshipRepo: "https://github.com/ArmanAdilMangat/DevelopersHub-AI-Internship-Advance-Tasks",
  bertDemo: "https://huggingface.co/spaces/ArmanXAI/ag-news-classifier-demo",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  chatApi: "https://armanxai-aria-chatbot.hf.space",
};

export const METRICS = [
  { value: 94.74, decimals: 2, suffix: "%", label: "BERT accuracy — AG News fine-tune" },
  { value: 99.82, decimals: 2, suffix: "%", label: "DistilBERT ticket tagger — 11 classes" },
  { value: 6, label: "ESP32-S3 nodes in GENIE, fully offline" },
  { value: 150, prefix: "≤", suffix: " ms", label: "GENIE flame / fall alert path" },
];
