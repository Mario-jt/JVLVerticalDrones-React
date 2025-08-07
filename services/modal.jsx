export function getModal({ fecharModal }) {
  const modal = (
    <div className="modal" onClick={fecharModal}>
      <div className="modal-pai" onClick={(e) => e.stopPropagation()}>
        <span className="fechar-modal" onClick={fecharModal}>
          &times;
        </span>
        <iframe
          className="yt-video"
          src="https://www.youtube.com/embed/--uNqGXcEvU"
          title="ROCK IN IATE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
    </div>
  );
  return modal;
}
