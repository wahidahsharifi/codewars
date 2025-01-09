function humanReadable (seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds / 60) % 60);
    const second = seconds % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${second < 10 ? '0' + second : second}`;
}