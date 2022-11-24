import {FC, useEffect, useState} from 'react'
import { IFilm } from '../../../models/IFilm'
import {useParams} from 'react-router-dom'
import cl from "./film.module.sass"
import UserService from "../../../services/UserService"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

const FilmPage = () => {

    const [swiper, setSwiper] = useState<any>()

    const [active, setActive] = useState<number>(1)

    const [film, setFilm] = useState<IFilm | null>(null)
    const [innerWidth, setInnerWidth] = useState<number>()
    
    const {id} = useParams()

    const getFilmData = async () => {
        const response = await UserService.getById(id)
        setFilm(response.data)
    }

    useEffect(() => {
        getFilmData()
    }, [id])

    function getWindowSize() {
        const {innerWidth} = window;
        return innerWidth
      }

    useEffect(() => {
        setInnerWidth(getWindowSize())
        function handleWindowResize() {
          setInnerWidth(getWindowSize())
        }
    
        window.addEventListener('resize', handleWindowResize);
    
    }, []);
    
    if(!film || innerWidth == null) return <h1>sas</h1>

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiper(swiper)}
        >
            <SwiperSlide>
                <div className={cl.FilmPage_container}>
                    <div className={cl.Picture} 
                        style={{
                            background: `url(${film.poster})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'

                        }}
                    >

                    </div>
                    <div className={cl.Content}>
                        <div className={cl.Header}>
                            <h1> {film.name} </h1>
                        </div>
                        <div className={cl.Separator}>
                            <div className={`${cl.Param} ${cl.Year}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <linearGradient id="gradient">
                                        <stop className="main-stop" offset="0%" />
                                        <stop className="alt-stop" offset="100%" />
                                    </linearGradient>
                                    <path fill="url(#gradient)" d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                                    <path fill="url(#gradient)" d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                                </svg>
                                <div>{film.year}</div>
                            </div>
                            <div className={`${cl.Param} ${cl.Country}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <linearGradient id="gradient">
                                        <stop className="main-stop" offset="0%" />
                                        <stop className="alt-stop" offset="100%" />
                                    </linearGradient>
                                    <path fill="url(#gradient)" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                                </svg>
                                <div>{film.country}</div>
                            </div>
                        </div>
                        <div className={cl.Pager}>
                            <div className={cl.Pager_headers}>
                                <div className={`${cl.Pager_segment} ${cl.Pager_segment1} ${active == 1 ? cl.Pager_active : ""}`}>
                                    <div className={cl.Name} onClick={() => setActive(1)}>
                                        Overwiev
                                    </div>
                                </div>
                                <div className={`${cl.Pager_segment} ${cl.Pager_segment2} ${active == 2 ? cl.Pager_active : ""}`}>
                                    <div className={cl.Name} onClick={() => setActive(2)}>
                                        Comments
                                    </div>
                                </div>
                                <div className={`${cl.Pager_segment} ${cl.Pager_segment3} ${active == 3 ? cl.Pager_active : ""}`}>
                                    <div className={cl.Name} onClick={() => setActive(3)}>
                                        Owners
                                    </div>
                                </div>
                            </div>
                            <div className={cl.Pager_content}>
                                {
                                    active == 1 &&
                                    <div>
                                        <div> {film.description} </div>
                                        <button className="button_a" onClick={() => swiper.slideNext()}> watch </button>
                                    </div>
                                }
                                {
                                    active == 2 && 
                                    <div>
                                        Саша говнюк, который не разрешил добавлять отзывы!
                                    </div>  
                                }
                                {
                                    active == 3 && 
                                    <div>
                                        Саша говнюк, который не разрешил добавлять другой функционал!
                                    </div>
                                }
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cl.Player_container}>
                    <iframe style={{ width: innerWidth/2, height: innerWidth/3 }} className={cl.IFrame} src={film.players[1].player} allowFullScreen></iframe>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default FilmPage