import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as API from '../services/api';

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ToastContainer, toast } from 'react-toastify'
import LoadingModal from './loadingPage';

export const GameList = () => {
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState(false);
    const [reload, setReload] = useState(false);

    const { gameType, platform } = useParams();

    const fetchData = async () => {
        const res = await API.getGamesByFilter({ gameType, platform });
        if (res.data.status == "0000") {
            setGames(res.data.games);
        }else {
            toast.error(res.data.desc, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            })
        }
    }

    useEffect(() => {
        fetchData();
    }, [gameType, platform]);

    const handleReloadUpdate = React.useCallback(() => {
        setReload(!reload);
    });

    const handleGamePlay = async (item) => {
        setLoading(true);
        const res = await API.getGamePlayUrl(item._id);
        if (res.data.status == "0000") {
            window.open(res.data.session_url,"", "width=800, height=800");
        }
        setLoading(false);
    }

    return (
        <>
            {loading && <LoadingModal />}
            <div className='slider-wrapper-recent'>
                <Splide
                    className={
                        'mt-8 mb-8 SliderAreaFirst'
                    }
                    options={{
                        gap: 10,
                        arrows: true,
                        pagination: false,
                        perPage: 5,
                        // height: props.height,
                        // direction: props.direction
                    }}
                >
                    {games && games.map((item, key) => (
                        <SplideSlide
                            key={key}
                            onClick={() => handleGamePlay(item)}
                        >
                            <div
                                className={
                                    'card cursor-pointer hover:border-b-4 hover:border-b-[#469711] pb-4 hover:pb-0  rounded-lg'
                                }
                            >
                                <img
                                    src={process.env.REACT_APP_BACKEND + '/images/' + item.img}
                                    alt={`slider ${key + 1}`}
                                    className={
                                        'rounded-tr-lg rounded-tl-lg w-[80px] xl:w-[200px] lg:w-[140px] aspect-square'
                                    }
                                />
                                <div className='presentation p-3 justify-between flex flex-col lg:flex-row items-center text-center lg:text-start rounded-bl-lg rounded-br-lg'>
                                    <h1 className='w-full h-8 object-cover overflow-hidden'>
                                        {item.gameName}
                                    </h1>
                                    <button>Pragmatic Play</button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}