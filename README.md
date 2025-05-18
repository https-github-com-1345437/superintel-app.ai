A powerful Next.js application that combines OpenAI's GPT-4 and Anthropic's Claude APIs to create a "superintelligence" interface. Ask a question once and get insights from multiple cutting-edge AI models simultaneously.
✨ Features

Dual AI Integration: Query both GPT-4 and Claude models concurrently
Combined Intelligence: Get different perspectives from leading AI models in one response
Responsive UI: Clean, modern interface that works across devices
Chat History: Track previous conversations and prompts
Korean Language Support: 한국어 지원 인터페이스

🚀 Tech Stack

Next.js - React framework
Tailwind CSS - Utility-first CSS framework
OpenAI API - For GPT-4 integration
Anthropic API - For Claude integration

📋 Prerequisites

Node.js 14.6.0 or newer
OpenAI API key
Anthropic API key

🔧 Installation

Clone this repository:
bashgit clone https://github.com/yourusername/superintel-app.git
cd superintel-app

Install dependencies:
bashnpm install

Create a .env.local file in the root directory with your API keys:
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here


💻 Usage
Development Server
Run the development server:
bashnpm run dev
Open http://localhost:3000 in your browser to see the application.
How to Use

Enter your question or prompt in the text area
Press "전송" button or hit Enter to submit
The app will query both AI models and display their combined responses
Your conversation history will be saved in the sidebar

🌐 API Integration
OpenAI Configuration
The app uses GPT-4 by default. You can modify the model in utils/openai.js:
javascript// Change model name if needed
model: 'gpt-4',
Claude Configuration
The app is configured to use Claude's latest model. You can adjust settings in utils/claude.js:
javascript// Customize parameters as needed
model: 'claude-3-opus-20240229',
max_tokens: 1000,
🚢 Deployment
Deploying to Vercel
The easiest way to deploy the application is using Vercel:

Install Vercel CLI:
bashnpm install -g vercel

From the project directory, deploy:
bashvercel

Follow the prompts to set up your project
Make sure to configure environment variables (API keys) in the Vercel dashboard

After deployment, you'll receive a URL like https://superintel-app.vercel.app to access your application.
📸 Preview
The application provides a clean interface with:

Gradient header with application title
Chat history sidebar on the left
Main chat area displaying AI responses
Input area at the bottom with send button
Responsive design that adapts to mobile and desktop views

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
👥 Contributors

Your Name - Initial work

🙏 Acknowledgments

OpenAI for providing the GPT-4 API
Anthropic for the Claude API
The Next.js team for the amazing framework


Made with ❤️ by [kimyoungmin & ai 연구특허진흥원]
