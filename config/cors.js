/*
* For more information on CORS, check out:
* http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
*/
module.exports.cors = {
    /***************************************************************************
    *                                                                          *
    * Which domains which are allowed CORS access? This can be a               *
    * comma-delimited list of hosts (beginning with http:// or https://) or    *
    * "*" to allow all domains CORS access.                                    *
    *                                                                          *
    ***************************************************************************/
    origin: '',
    /***************************************************************************
     *                                                                          *
     * Which methods should be allowed for CORS requests? This is only used in  *
     * response to preflight requests (see article linked above for more info)  *
     *                                                                          *
     ***************************************************************************/
    methods: 'GET,POST,PUT,DELETE',
    /***************************************************************************
    *                                                                          *
    * Which headers should be allowed for CORS requests? This is only used in  *
    * response to preflight requests.                                          *
    *                                                                          *
    ***************************************************************************/
    headers: 'content-type'
}