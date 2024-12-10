"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function VideoButton() {
    return (
        <div className="bg-white py-2 sm:px-4 rounded-xl font-bold cursor-pointer flex items-center space-x-3 text-xs" onClick={() => window.open("https://youtu.be/4OOuJzf5c_w", "_blank")}>
            <div className="bg-gray-300 p-2 rounded-full flex items-center justify-center aspect-square">
                <FontAwesomeIcon icon={faPlay} className="text-xs" />
            </div>
            <span>Voir ma vidéo de présentation</span>
        </div>
    );
}