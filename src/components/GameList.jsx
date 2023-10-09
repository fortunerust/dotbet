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
        setLoading(true);
        if (platform == "ALL") {
            const res = await API.getGames();
            if (res.data.status == "0000") {
                setGames(res.data.games.filter((game) => game.gameType == gameType));
            } else {
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
        } else if (gameType == "ALL") {
            const res = await API.getGames();
            if (res.data.status == "0000") {
                setGames(res.data.games.filter((game) => game.platform == platform));
            } else {
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
        } else {
            const res = await API.getGamesByFilter({ gameType, platform });
            if (res.data.status == "0000") {
                setGames(res.data.games);
            } else {
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
        setLoading(false);
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
            setLoading(false);
            window.open(res.data.session_url, "", "width=800, height=800");
        } else {
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
        setLoading(false);
    }

    return (
        <>
            {loading && <LoadingModal />}
            <div className='flex game-list flex-wrap'>
                {games && games.map((item, key) => (
                    <SplideSlide
                        key={key}
                        onClick={() => handleGamePlay(item)}
                        style={{ margin: "auto" }}
                    >
                        <div
                            className={
                                'card cursor-pointer border-b-4 border-transparent hover:border-b-[#469711] mb-4 hover:pb-0 rounded-lg hover:brightness-150'
                            }
                        >
                            <img
                                src={process.env.REACT_APP_BACKEND + '/images/' + item.img}
                                alt={`slider ${key + 1}`}
                                className={
                                    'rounded-tr-lg rounded-tl-lg w-[200px] aspect-square'
                                }
                            />
                            <div className='presentation p-3 justify-between flex flex-col lg:flex-row items-center text-center lg:text-start rounded-bl-lg rounded-br-lg w-[200px]'>
                                <h1 className='w-full h-8 object-cover overflow-hidden'>
                                    {item.gameName}
                                </h1>
                                <button>{item.platform}</button>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </div>
            {/* <div className='slider-wrapper-recent'>
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
            </div> */}
        </>
    )
}