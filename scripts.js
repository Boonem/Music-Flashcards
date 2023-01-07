// JavaScript for the flashcard program

// Array of chords to use as flashcards
const chords = [
    { name: "C major", notes: ["C", "E", "G"] },
    { name: "D minor", notes: ["D", "F", "A"] },
    { name: "E minor", notes: ["E", "G", "B"] },
    { name: "F major", notes: ["F", "A", "C"] },
    { name: "G major", notes: ["G", "B", "D"] },
    { name: "A minor", notes: ["A", "C", "E"] },
    { name: "B diminished", notes: ["B", "D", "F"] }
  ];
  
  // Function to start the flashcard program
  function start() {
    // Get the number of seconds the user has entered
    const seconds = document.getElementById("seconds").value;
  
    // Set the interval to display the next flashcard
    const interval = setInterval(displayNextFlashcard, seconds * 1000);
  }
  
  // Function to display the next flashcard
  function displayNextFlashcard() {
    // Get a random chord from the chords array
    const chord = chords[Math.floor(Math.random() * chords.length)];
  
    // Display the chord name on the front of the flashcard
    document.getElementById("chord-name").innerHTML = chord.name;
  
    // Display the component notes on the back of the flashcard
    document.getElementById("chord-notes").innerHTML = chord.notes.join(", ");
  
    // Flip the flashcard to show the back
    flipFlashcard();
  }
  
  // Function to flip the flashcard
  function flipFlashcard() {
    const flashcard = document.getElementById("flashcard");
    flashcard.classList.toggle("flip");
  }
  