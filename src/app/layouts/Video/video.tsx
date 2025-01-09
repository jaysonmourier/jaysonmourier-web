import styles from '@/app/layouts/Video/video.module.css';

type VideoProps = {
    url: string
}

const Video = ({ url }: VideoProps) => {
    return (
        <section className={`${styles.section} py-20 bg-neutral-100`}>
            <h3 className="text-center mb-10 text-3xl font-bold">Ma vidéo de présentation</h3>
            <div className="w-full max-w-4xl mx-auto px-4">
                <iframe
                    className="w-full aspect-video"
                    src={url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    sandbox="allow-same-origin allow-scripts allow-presentation"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        </section>
    );
};


export default Video;