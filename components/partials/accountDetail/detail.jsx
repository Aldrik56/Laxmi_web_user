const Detail = ({t,setPath}) => {
    return (
        <div className="col-12 col-lg-9 mt-4">
            <div className="content">
                <h4 className="fw-bold">{t('Account')}</h4>
                <div className="row">
                    <div className="col-2">
                        {t('Email')}
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-9">
                        example@mail.com 
                        <span
                            onClick={() => setPath(2)} 
                            className="text-blue text-pointer ms-2">{t('edit')}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        {t('Name')}
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-9">
                        -
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        {t('Telephone')}
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-9">
                        -
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        {t('Height')}
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-9">
                        -
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        {t('Weight')}
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-9">
                        -
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        {t('Age')}
                    </div>
                    <div className="col-1">
                        :
                    </div>
                    <div className="col-9">
                        -
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Detail ;