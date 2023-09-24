import "./ContentHeader.css";

export default function ContentHeader({header, paragraph}) {
    return (
        <>
            <h2>{header}</h2>
            <p>{paragraph}</p>
        </>
    )
}