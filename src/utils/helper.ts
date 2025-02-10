export const removeExtension = (url: string): string => {
    return url.replace(/\.[^/.]+$/, '');
}