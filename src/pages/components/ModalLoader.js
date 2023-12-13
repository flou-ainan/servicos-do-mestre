export default function ModalLoader({component, setModalShown}){
    return(
        <>
        <div
            className="modal-container"
            id="modal-container"
            onClick={(e) => {
                if (e.target.id === "modal-container"){
                    setModalShown(false)
                }
            }}
        >
            <div className="modal">
                <div className="modal-header">
                    <span
                        className="close"
                        onClick={() => setModalShown(false)}
                    >x</span>
                </div>
                <div className="modal-body">
                    {component}
                </div>
            </div>
        </div>
            <style jsx>{`
            .modal {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
                width: 90%;
                height: auto;
                max-height: 90vh;
                min-height: 300px;
                max-width: 900px;
                background-color: white;
                border-radius: 10px;
                color: rgb(50, 50, 50);
            }
            .modal-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: rgba(0, 0, 0, 0.6);
                position: fixed;
                width: 100vw;
                height: 105vh;
                z-index: 100;
                -webkit-backdrop-filter: blur(4);
            }
            .modal-header{
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;
                align-items: center;
            }
            .modal-body{
                display: flex;
                flex-direction: column;
                align-self: stretch;
                height: 100%;
                padding: 10px;
                overflow-x: auto;

            }
            .close{
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 18pt;
                width: 25px;
                height: 25px;
                margin: 5px;
                cursor: pointer;
            }

            `}</style>
        </>
    )
}