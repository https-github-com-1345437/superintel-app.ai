import axios from 'axios';

export async function queryClaude(prompt) {
  // 최신 Claude API 엔드포인트 사용
  const response = await axios.post(
    'https://api.anthropic.com/v1/messages',
    {
      model: 'claude-3-opus-20240229',  // 최신 모델 사용
      max_tokens: 1000,
      messages: [
        { role: 'user', content: prompt }
      ]
    },
    {
      headers: {
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
    }
  );
  
  // 새로운 응답 형식에 맞게 데이터 추출
  return response.data.content[0].text;
