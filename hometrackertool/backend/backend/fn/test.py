from ntpath import join
import nmap, time, json, subprocess


nm = nmap.PortScanner()
r = nm.scan(arguments='-sn', hosts='192.168.8.*')
print(r)