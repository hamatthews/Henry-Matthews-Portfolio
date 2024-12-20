export default function Logo({onClickHandler}: {onClickHandler: () => void}) {

    return (
        <svg viewBox="0 0 100 100" className="left-panel-logo" onClick={onClickHandler}>
            <polyline stroke="white" fill="none" strokeWidth={4} points="   49.998,46   56.93,42   56.932,30   63.86,26   70.788,30   70.788,70   63.86,74   56.932,70   56.93,58   50,62   43.072,58   43.068,70   36.14,74   29.212,70   29.212,30   36.14,26   43.068,30   43.068,42   49.998,46   56.93,42   "></polyline>
            <polyline fill="rgb(197,183,207)" points="   36.14,34   36.14,74   43.07,70   43.07,30   "></polyline><polyline fill="indigo" points="   36.14,34   36.14,46   50,54   50,62   36.14,54   36.14,74   29.21,70   29.21,30   "></polyline>
            <polyline fill="white" points="   36.14,26   43.07,30   36.14,34   29.21,30   "></polyline>
            <polyline fill="indigo" points="   63.86,34   63.86,74   56.93,70   56.93,30   "></polyline>
            <polyline fill="rgb(197,183,207)" points="   63.86,34   63.86,46   50,54   50,62   63.86,54   63.86,74   70.788,70   70.788,54   70.788,30   "></polyline>
            <polyline fill="white" points="   63.86,26   56.93,30   63.86,34   70.79,30   "></polyline>
            <polyline fill="white" points="   36.14,46   43.07,42   50,46   56.93,42   63.86,46   50,54   "></polyline>
            <polyline fill="none" stroke="white" strokeWidth={2} points="
                    50,1
                    92.434,25.5
                    92.434,74.5
                    50,99
                    7.5660000000000025,74.5
                    7.5660000000000025,25.5
                    50,1
                    92.434,25.5
                    "></polyline><polyline fill="none" stroke="white" strokeWidth={3} points="
                    50,9
                    85.506,29.5
                    85.506,70.5
                    50,91
                    14.494,70.5
                    14.494,29.5
                    50,9
                    85.506,29.5
                    "></polyline><polyline fill="white" points="   7.566,25.5   50,1   92.434,25.5   85.506,29.5   50,9   14.494,29.5   "></polyline><polyline fill="rgb(197,183,207)" points="   85.506,29.5   92.434,25.5   92.434,74.5   50,99   50,91   85.506,70.5   "></polyline><polyline fill="indigo" points="   7.566,25.5   14.494,29.5   14.494,70.5   50,91   50,99   7.566,74.5   "></polyline>
        </svg>
    );
}