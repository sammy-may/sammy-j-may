import { useEffect, useRef } from "react";

function ForestBackground() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const blendVideoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        const blendVideo = blendVideoRef.current;
        if (!video || !blendVideo) {
            return;
        }

        const applyPlaybackRate = () => {
            video.playbackRate = 0.8;
            blendVideo.playbackRate = 0.8;
        };

        const applyOffset = () => {
            if (!Number.isFinite(video.duration) || video.duration <= 0.12) {
                return;
            }

            const target = Math.min(video.duration - 0.04, video.currentTime + 0.03);
            const drift = Math.abs(blendVideo.currentTime - target);
            if (drift > 0.12) {
                blendVideo.currentTime = target;
            }
        };

        applyPlaybackRate();
        applyOffset();

        video.addEventListener("loadedmetadata", applyPlaybackRate);
        blendVideo.addEventListener("loadedmetadata", applyPlaybackRate);
        video.addEventListener("loadedmetadata", applyOffset);

        // Some browsers delay autoplay until an explicit play() call.
        const safePlay = async (target: HTMLVideoElement) => {
            try {
                await target.play();
            } catch {
                // Keep silent: autoplay fallback is handled by browser policies.
            }
        };

        void safePlay(video);
        void safePlay(blendVideo);

        const syncTimer = window.setInterval(applyOffset, 400);

        return () => {
            window.clearInterval(syncTimer);
            video.removeEventListener("loadedmetadata", applyPlaybackRate);
            blendVideo.removeEventListener("loadedmetadata", applyPlaybackRate);
            video.removeEventListener("loadedmetadata", applyOffset);
        };
    }, []);

    return (
        <div aria-hidden="true" className="cinematic-video-bg">
            <video
                autoPlay
                className="cinematic-video-bg__video"
                loop
                muted
                playsInline
                preload="auto"
                ref={videoRef}
            >
                <source
                    src="/videos/Video_Ready_After_Black_Screen.mp4"
                    type="video/mp4"
                />
            </video>
            <video
                autoPlay
                className="cinematic-video-bg__video cinematic-video-bg__video--blend"
                loop
                muted
                playsInline
                preload="auto"
                ref={blendVideoRef}
            >
                <source
                    src="/videos/Video_Ready_After_Black_Screen.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="cinematic-video-bg__grade" />
            <div className="cinematic-video-bg__halo" />
            <div className="cinematic-video-bg__fog cinematic-video-bg__fog--rear" />
            <div className="cinematic-video-bg__fog cinematic-video-bg__fog--front" />
            <div className="cinematic-video-bg__grain" />
            <div className="cinematic-video-bg__vignette" />
        </div>
    );
}

export default ForestBackground;
