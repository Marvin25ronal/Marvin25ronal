import { Container } from "react-bootstrap"

export const CustomCard = ({ title, image }: {
    title: string,
    image: string
}) => {
    return (
        <div className="custom-card">
            <img src={image} />
            <div style={{
                position: 'absolute',
                bottom: -15,
                left: '0',
                width: '100%',
                textAlign: 'center',
            }}>
                <span style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '0px 5px',
                    borderRadius: '5px',
                    fontSize: '.8rem',
                }}>
                    {title}
                </span>

            </div>
        </div>
    )
}