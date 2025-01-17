document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500); // Remove the trail after 500ms
});
