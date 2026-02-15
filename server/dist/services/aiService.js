"use strict";
/**
 * AI Service for generating note summaries
 * Currently uses a mock implementation for development
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarize = void 0;
/**
 * Generate a summary of the given content
 */
const summarize = async (content) => {
    try {
        // Check if AI API key is configured
        if (process.env.AI_API_KEY && process.env.AI_API_KEY !== 'your_api_key_here') {
            // TODO: Implement actual AI API call here
            // Example with OpenAI:
            // const response = await fetch('https://api.openai.com/v1/chat/completions', {
            //   method: 'POST',
            //   headers: {
            //     'Authorization': `Bearer ${process.env.AI_API_KEY}`,
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({
            //     model: 'gpt-3.5-turbo',
            //     messages: [{ role: 'user', content: `Summarize this note briefly: ${content}` }],
            //     max_tokens: 100
            //   })
            // });
            // const data = await response.json();
            // return data.choices[0].message.content;
        }
        // Mock implementation for development
        return generateMockSummary(content);
    }
    catch (error) {
        const err = error;
        console.error('AI Service Error:', err.message);
        throw new Error('AI service unavailable');
    }
};
exports.summarize = summarize;
/**
 * Generate a mock summary for development purposes
 */
const generateMockSummary = (content) => {
    const wordCount = content.split(/\s+/).length;
    const firstWords = content.split(/\s+/).slice(0, 5).join(' ');
    if (wordCount <= 10) {
        return `Brief note: "${content}"`;
    }
    return `This note contains ${wordCount} words. It begins with: "${firstWords}..." The note appears to be a personal text entry.`;
};
//# sourceMappingURL=aiService.js.map