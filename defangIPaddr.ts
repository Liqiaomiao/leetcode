/**
 Given a valid (IPv4) IP address, return a defanged version of that IP address.
 A defanged IP address replaces every period "." with "[.]".
 */
const defangIPaddr = (address: string): string => {
    return address.split(".").join('[.]');
};