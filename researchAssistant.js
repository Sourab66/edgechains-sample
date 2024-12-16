// Importing the necessary modules from EdgeChains
const { OpenAIClient, ChatChain } = require('@arakoodev/edgechains');

// Function for the Research Assistant Application
async function researchAssistant() {
  try {
    // Step 1: Set up the OpenAI client
    const openAIClient = new OpenAIClient({
      apiKey: 'sk-test1234567890abcdefghijklmnopqrstuvwx', // Add your OpenAI API key here
    });

    // Step 2: Create a chat chain
    const chatChain = new ChatChain(openAIClient, {
      model: 'text-davinci-003', // Using a text generation model
    });

    // Step 3: User input for the research topic
    console.log('Hi! I am your research assistant.');
    console.log('Enter the topic you want me to summarize:');

    // Example topic for testing (replace with user input in a real app)
    const topic = 'Impacts of climate change on marine ecosystems';
    console.log(`Researching: ${topic}`);

    // Step 4: Send the topic to the AI model
    const response = await chatChain.chat(
      `Give me a detailed summary on: ${topic}`
    );

    // Step 5: Show the AI-generated response
    console.log('Here is your summary:');
    console.log(response);
  } catch (err) {
    console.error('Error while running Research Assistant:', err);
  }
}

// Run the function
researchAssistant();
