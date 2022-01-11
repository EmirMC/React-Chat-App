import Add from "./Add"

export default function Chat() {
    return (
        <div className="main">
            <div className="w-full text-center text-xl text-indigo-600 dark:text-neutral-200 absolute top-2 left-0">
                <span>Group Title</span>
            </div>
            <div className="overflow-y-auto flex flex-col w-full pr-2">
                <div className="message message-passive">
                    <span className="pr-12 text-sm">Emir Mert ÇAMLI</span>
                    <p>
                        Text Message
                        <span className="float-right max-w-min">07:13</span>
                    </p>
                </div>
                <div className="message message-active">
                    <span className="pr-12 text-sm">Emir Mert ÇAMLI</span>
                    <p>
                        Text Message Text Message Text Message Text Message Text Message Text asd Message 
                        Text Message Text Message Text Message Text Message Text Message Text Message 
                        Text Message Text Message Text Message Text Message Text Message Text Message 
                        Text Message Text Messsssssssssssssssaaasdad asd Messsssssssssssssssaaasdad
                        <span className="float-right max-w-min">07:13</span>
                    </p>
                </div>
                <div className="message message-active">
                    <span className="pr-12 text-sm">Emir Mert ÇAMLI</span>
                    <p>
                        Text Message
                        <span className="float-right max-w-min">07:13</span>
                    </p>
                </div>
                <div className="message message-passive">
                    <span className="pr-12 text-sm">Emir Mert ÇAMLI</span>
                    <p>
                        Text Message Text Message Text Message Text Message Text Message Text asd Message 
                        Text Message Text Message Text Message Text Message Text Message Text Message 
                        Text Message Text Message Text Message Text Message Text Message Text Message 
                        Text Message Text Messsssssssssssssssaaasdad asd Messsssssssssssssssaaasdad
                        <span className="float-right max-w-min">07:13</span>
                    </p>
                </div>
                <div className="message message-passive">
                    <span className="pr-12 text-sm">Emir Mert ÇAMLI</span>
                    <p>
                        Text Message
                        <span className="float-right max-w-min">07:13</span>
                    </p>
                </div>
                <div className="message message-active">
                    <span className="pr-12 text-sm">Emir Mert ÇAMLI</span>
                    <p>
                        Text Message Text Message Text Message Text Message Text Message Text asd Message 
                        Text Message Text Message Text Message Text Message Text Message Text Message 
                        Text Message Text Message Text Message Text Message Text Message Text Message 
                        Text Message Text Messsssssssssssssssaaasdad asd Messsssssssssssssssaaasdad
                        <span className="float-right max-w-min">07:13</span>
                    </p>
                </div>
            </div>
            <Add type="add_message" addStatus={false} />
        </div>
    )
}
