import { fileURLToPath } from "url";
import path from "path";
import { getLlama, LlamaChatSession } from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modelPath = path.join(
  __dirname,
  "..",
  "models",
  // "qwen2.5-1.5b-instruct-q4_k_m.gguf",
  "Qwen3-1.7B-Q8_0.gguf",
);

async function main() {
  console.log("⏳ 正在初始化 AI 引擎 (v3)...");

  try {
    const llama = await getLlama();
    const model = await llama.loadModel({
      modelPath: modelPath,
    });
    const context = await model.createContext({
      contextSize: 4096,
    });
    const session = new LlamaChatSession({
      contextSequence: context.getSequence(),
    });

    console.log("engine is ready!");
    console.log("-----------------------------------");

    // Question
    const userMessage = "What's seven plus eight?";
    console.log("User:", userMessage);

    // Answer
    const aiResponse = await session.prompt(userMessage);
    console.log("AI:", aiResponse);
    console.log("-----------------------------------");
  } catch (error) {
    console.error("❌ 发生错误:", error);
  }
}

main();
