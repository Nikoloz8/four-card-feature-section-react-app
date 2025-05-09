import "./box.css"

export default function Box({ borderColor, h3Text, text, image }) {
    return (
        <div className="box" style={{
            borderTop: `4px solid ${borderColor}`
        }}>
            <h3>
                {h3Text}
            </h3>
            <p className="box-p">
                {text}
            </p>
            <img src={image} alt="" />
        </div>
    )
}