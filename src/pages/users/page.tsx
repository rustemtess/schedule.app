import Container from "../../components/Container"

const Users = () => {
    
    return (
        <Container>
            <section className='max-w-[280px] min-h-screen w-full min-w-[280px] bg-black flex flex-col justify-between'>
                <nav className='flex flex-col text-xl w-full'>
                    <a className='flex items-center gap-3 duration-200 cursor-pointer px-3 py-4 text-[#B0B0B0] w-full hover:bg-[#151515]'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path fill='#B0B0B0' d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"/><circle fill='#B0B0B0' cx="12" cy="15" r="1.5"/><circle fill='#B0B0B0' cx="7" cy="15" r="1.5"/><circle fill='#B0B0B0' cx="17" cy="15" r="1.5"/></svg>
                        <span>Расписание</span>
                    </a>
                    <a className='flex items-center gap-3 duration-200 cursor-pointer px-3 py-4 text-[#B0B0B0] w-full hover:bg-[#151515]'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path fill='#B0B0B0' d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z"/></svg>
                        <span>Пользователи</span>
                    </a>
                </nav>
                <nav className='flex flex-col text-xl w-full'>
                    <a className='flex items-center gap-3 duration-200 cursor-pointer px-3 py-4 text-[#B0B0B0] w-full hover:bg-[#151515]'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path fill='#B0B0B0' d="M22.829,9.172,18.95,5.293a1,1,0,0,0-1.414,1.414l3.879,3.879a2.057,2.057,0,0,1,.3.39c-.015,0-.027-.008-.042-.008h0L5.989,11a1,1,0,0,0,0,2h0l15.678-.032c.028,0,.051-.014.078-.016a2,2,0,0,1-.334.462l-3.879,3.879a1,1,0,1,0,1.414,1.414l3.879-3.879a4,4,0,0,0,0-5.656Z"/><path fill='#B0B0B0' d="M7,22H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7A1,1,0,0,0,7,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7a1,1,0,0,0,0-2Z"/></svg>
                        <span>
                            Выйти
                        </span>
                    </a>
                </nav>
            </section>
            <section className='w-full min-h-screen flex flex-col'>
                <header className='flex w-full flex items-center justify-between px-4 py-2 border-b-[0.5px] border-gray-200'>
                    <div>
                        {/* <h2 className='text-2xl font-medium'>{ formatDate(new Date()) }</h2> */}
                        <p className='text-base'>Запланирована 6 встреч</p>
                    </div>
                    <div className="flex flex-col justify-left">
                        <h4 className="text-[#000000E5] text-xl">Жумабек Р.Р</h4>
                        <h5 className="text-[#00000099] text-right">Пользователь</h5>
                    </div>
                </header>
                <div className="flex flew-row justify-between">
                    <button className="max-w-[100px] w-full max-h-[50px] bg-[#F04939] rounded-[6px] p-[6px] text-white">Добавить</button>
                    <input  placeholder="Поиск..." className='outline-none max-w-[200px] w-full max-h-[50px] bg-[#F0F0F0] rounded-[6px] p-[6px]'></input>
                </div>
            </section>
        </Container>
    )

}

export default Users