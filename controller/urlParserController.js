exports.urlParser = (req, res, next) => {
    let { urlFormat, urlInstance } = req.body;

    const cleanedUrlFormat = urlFormat.replaceAll(':','');
    const formatArray = cleanedUrlFormat.split('/');
    const instanceArray = urlInstance.split('?');
    const instanceDomainsArray = instanceArray[0].split('/');
    const queryStringArray = instanceArray[1].split('&');

    let hashObject = {};

    for (let i = 0; i < formatArray.length; i++) {
        if (formatArray[i] !== '' && formatArray[i] !== instanceDomainsArray[i] && instanceDomainsArray[i] !== '') {
            hashObject[formatArray[i]] = instanceDomainsArray[i];
        }
    }

    queryStringArray.forEach(searchParam => {
        const parameter = searchParam.split('=');
        const key = parameter[0];
        const value = parameter[1];
        hashObject[key] = value;
    });

    res.status(200).json(hashObject);
};