import { fileURLToPath } from "url";
import path from "path";
// 1. 注意这里导入的变化：我们需要 getLlama 函数
import { getLlama, LlamaChatSession } from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modelPath = path.join(
  __dirname,
  "..",
  "models",
  "qwen2.5-1.5b-instruct-q4_k_m.gguf",
);

async function main() {
  console.log("⏳ 正在初始化 AI 引擎 (v3)...");

  try {
    // 2. 首先获取 llama 实例 (这是 v3 的新入口)
    const llama = await getLlama();

    // 3. 使用 llama 实例加载模型
    const model = await llama.loadModel({
      modelPath: modelPath,
    });

    // 4. 创建上下文 (Context)
    const context = await model.createContext({
      contextSize: 4096,
    });

    // 5. 创建会话 (Session)
    // v3 中需要获取 context 的 sequence
    const session = new LlamaChatSession({
      contextSequence: context.getSequence(),
    });

    console.log("✅ 引擎加载成功！准备提问...");
    console.log("-----------------------------------");

    const userMessage = "What's seven plus eight?";
    console.log("User:", userMessage);

    // 6. 获取回答
    const aiResponse = await session.prompt(userMessage);

    console.log("AI:", aiResponse);
    console.log("-----------------------------------");
  } catch (error) {
    console.error("❌ 发生错误:", error);
  }
}

main();
