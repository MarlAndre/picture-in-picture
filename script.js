const videoElement = document.getElementById('video')
const button = document.getElementById("button")

// Prompt to select media stream, pass to video element and then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    // Catch Error here
  }

}

// Add event listener

button.addEventListener('click', async()=> {
  // Disble button
  button.disabled = true
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;

})

// On load
selectMediaStream()
