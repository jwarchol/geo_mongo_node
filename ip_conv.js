function ip2long(ip) {
    var ips = ip.split('.');
    var iplong = 0;
    with (Math) {
        iplong = ips[0]*pow(256,3) + ips[1]*pow(256,2) + ips[2]*pow(256,1) + ips[3]*pow(256,0);
    }
    return iplong;
}

        
function long2ip(l) {


    with (Math) {
        var ip1 = floor(l/pow(256,3));
        var ip2 = floor((l%pow(256,3))/pow(256,2));
        var ip3 = floor(((l%pow(256,3))%pow(256,2))/pow(256,1));
        var ip4 = floor((((l%pow(256,3))%pow(256,2))%pow(256,1))/pow(256,0));
    }
    return ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
}

