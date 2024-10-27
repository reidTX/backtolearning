// Select the custom cursor element
const customCursor = document.getElementById("customCursor");

// Function to update the cursor's position
document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY-8}px`;
    customCursor.style.display = "block"; // Show cursor when moving
});

// Function to hide the cursor when leaving the viewport
document.addEventListener("mouseleave", () => {
    customCursor.style.display = "none"; // Hide cursor when mouse leaves
});

// Function to show the cursor again when entering the viewport
document.addEventListener("mouseenter", () => {
    customCursor.style.display = "block"; // Show cursor again when mouse enters
});

// Function to hide the cursor when hovering over specific elements
const hideCursorElements = document.querySelectorAll(
    "label, select, button, input[type='button'], input[type='reset'], input[type='submit'], input[type='radio'], input[type='checkbox'], a"
);

hideCursorElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        customCursor.style.display = "none"; // Hide cursor when hovering over
    });
    element.addEventListener("mouseout", () => {
        customCursor.style.display = "block"; // Show cursor when leaving
    });
});
