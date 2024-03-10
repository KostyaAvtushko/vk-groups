export function getEndingForSubscribers(count: number) {
    count = Math.abs(count);

    const remainder = count % 100;

    if (remainder >= 11 && remainder <= 19) {
        return 'подписчиков';
    } else {
        const lastDigit = count % 10;
        if (lastDigit === 1) {
            return 'подписчик';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'подписчика';
        } else {
            return 'подписчиков';
        }
    }
}

export function getEndingForFriendsSubscribed(count: number) {
    count = Math.abs(count);

    const remainder = count % 100;

    if (remainder >= 11 && remainder <= 19) {
        return 'друзей подписано';
    } else {
        const lastDigit = count % 10;
        if (lastDigit === 1) {
            return 'друг подписан';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'друга подписано';
        } else {
            return 'друзей подписано';
        }
    }
}