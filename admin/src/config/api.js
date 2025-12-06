const api = {
    rootUrl: '',  // 留空，因为在 main.js 中已设置 Axios.defaults.baseURL = '/api/admin/'
    // 本地上传接口
    uploadUrl: 'upload/image',
};

/**
 * 获取图片完整URL
 * - 第三方图片(http/https开头)直接返回
 * - 本地图片(相对路径)不需要拼接，因为同域访问
 * @param {string} url 图片路径
 * @returns {string} 完整的图片URL
 */
export function getImageUrl(url) {
    if (!url) return '';
    // 如果是完整URL，直接返回
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    // 本地图片，相对路径直接使用（同域访问）
    return url;
}

export default api
