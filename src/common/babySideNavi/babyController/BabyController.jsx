import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BabyController.module.css";
import yellowImg from "./img/yellow.png";
import babyfaceImg from "./img/babyface.png";
import babyImg from "./img/baby.png";
import childrenImg from "./img/children.png";
import { CgClose } from "react-icons/cg";


const BabyController = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);

    const navigate = useNavigate();

    const goMom = () => navigate("/choose-type?type=mom");
    const goChild = () => navigate("/choose-type?type=child");

    return (
        <div className={styles.rightcontainer}>
            <div className={styles.margin}></div>

            <div className={styles.full}>
                <div className={styles.one}>
                    <div className={styles.babyclick}>
                        <button className={styles.ingbaby}>
                            <div className={styles.bbb}>
                                <img src={babyfaceImg} alt="babyface" className={styles.babyfaceImage} />
                                <div className={styles.babyname}>아기이름 DB</div>
                                <div className={styles.how}>첫째 DB</div>
                            </div>
                        </button>

                        <button className={styles.plusbb} onClick={openModal}>
                            <img src={yellowImg} alt="yellow" className={styles.yellowImage} />
                            <span>아기추가</span>
                        </button>
                    </div>
                </div>

                <div className={styles.between}></div>
                <div className={styles.two}></div>
            </div>

            {/* 모달 */}
            {showModal && (
                <div className={styles.modal}>

                    <div className={styles.ppap}>
                        {/* 닫기 버튼 */}
                        <button className={styles.back} onClick={() => setShowModal(false)}><CgClose /></button>

                        {/* 임산모 모달 */}
                        <button className={styles.modalContentone} onClick={goMom}>
                            <div className={styles.modalone}>
                                <h1 className={styles.sanmotitle} >임산모</h1>
                                <span className={styles.be}>아직 뱃속에 있어요</span>
                                <img src={babyImg} alt="baby" className={styles.babyImg} />

                            </div>
                        </button>

                        {/* 육아 모달 */}
                        <button className={styles.modalContenttwo} onClick={goChild}>
                            <div className={styles.modaltwo}>
                                <h1 className={styles.babtitle}>육아</h1>
                                <span className={styles.bee}>태어났어요</span>
                                <img src={childrenImg} alt="childrenbaby" className={styles.childrenImg} />

                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BabyController;
