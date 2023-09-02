import useModalContext from "../../Hooks/useModalContext";


function Modal() {
    const { isModalOpen, setIsModalOpen } = useModalContext()
    const cancelModal = () => {
        setIsModalOpen(false)

    }
    return (
        <div className=" inset-0 flex items-center justify-center z-50">
            {
                isModalOpen && <div id="popup-modal" tabindex="-1" class="fixed overflow top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 z-10 overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div class="sm:flex sm:items-start">

                                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Connect your account</h3>
                                                <div class="mt-2 grid gap-2 justify-center w-full">
                                                    <input className="p-1 rounded-lg" type="text" name="" id="" placeholder="user" /><br />
                                                    <input className="p-1 rounded-lg" type="password" name="" id="" placeholder="password" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button onClick={cancelModal} type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Submit</button>
                                        <button onClick={cancelModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

        </div>
    );
}

export default Modal;
