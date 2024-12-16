
# Research Assistant using EdgeChains

## About the Project
This project is made by me using EdgeChains library. It is a simple AI application that works like a research assistant. You give a topic, and it will generate a summary for you using AI. I made this to try learning new things and see how EdgeChains can be used.


## Here is how i wrote the code step by step:

# Setting Up the Environment:
First, I installed Node.js on my system since it’s essential for running JavaScript projects. After that, I created a new folder for my project and initialized it using npm init. This generated a package.json file for managing dependencies.

# Adding Dependencies:
I looked into EdgeChains and found that it was a good wrapper for working with OpenAI. I installed the library using npm install @arakoodev/edgechains.

# Writing the Code:
1. **Creating the File**:  
   I created a JavaScript file named `researchAssistant.js`.  

2. **Importing Modules**:  
   I started by importing the necessary modules from the EdgeChains library.  

3. **Initializing the Client**:  
   I initialized the OpenAI client by providing a placeholder for the API key (`sk-test1234567890...`).  

4. **Designing the Main Function**:  
   - I designed the main function, `researchAssistant`, to handle everything.  
   - It initializes the AI client and sets up a **chat chain** for interacting with the model.  

5. **Adding a Test Topic**:  
   - I added a fixed example topic (e.g., "Impacts of climate change on marine ecosystems") to test the summarization feature.  
   - In the final version, this can be replaced with dynamic user input to make it more interactive.  

6. **Sending Requests to OpenAI**:  
   The program sends the test topic to the OpenAI model using EdgeChains and logs the AI-generated summary to the console.  

7. **Debugging and Testing**:  
   - Initially, I faced errors with the API integration because I had missed specifying the model name correctly (`text-davinci-003`).  
   - Once I fixed this issue, the app worked fine and started generating summaries.  

## How It Works
Once you run it, the program will ask for a topic you want to research. For example, you can enter "Benefits of renewable energy" or anything else. The app will send this to OpenAI and give back a detailed summary about the topic. It’s like a mini researcher for you.

## What I Learned:
Through this project, I learned how to use EdgeChains and connect it with OpenAI. It was also a good opportunity to brush up on Node.js basics, like working with external libraries and handling asynchronous code using async/await.

## Things to Improve
I think I can add more features in future like saving the summary to a file or allowing users to ask follow-up questions. But this is a good start for now!
