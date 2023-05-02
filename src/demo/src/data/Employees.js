"use strict";
/*
  MIT License

  Copyright © 2023 Alex Høffner

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software
  and associated documentation files (the “Software”), to deal in the Software without
  restriction, including without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or
  substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
  BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
exports.__esModule = true;
exports.Employees = void 0;
var forms42core_1 = require("forms42core");
var Employees = /** @class */ (function () {
    function Employees() {
    }
    Object.defineProperty(Employees, "data", {
        get: function () {
            if (!Employees.converted) {
                Employees.converted = true;
                for (var i = 0; i < this.rawdata.length; i++)
                    Employees.rawdata[i][5] = forms42core_1.dates.parse(Employees.rawdata[i][5], "YYYY-MM-DD");
            }
            return (Employees.rawdata);
        },
        enumerable: false,
        configurable: true
    });
    Employees.columns = [
        "employee_id", "first_name", "last_name", "email", "phone_number",
        "hire_date", "job_id", "salary", "commission_pct", "manager_id", "department_id"
    ];
    Employees.converted = false;
    Employees.rawdata = [
        ["100", "Steven", "King", "SKING", "515.123.4567", "1987-06-17", "AD_PRES", "24000.00", null, null, "90"],
        ["101", "Neena", "Kochhar", "NKOCHHAR", "515.123.4568", "1989-09-21", "AD_VP", "17000.00", null, "100", "90"],
        ["102", "Lex", "De Haan", "LDEHAAN", "515.123.4569", "1993-01-13", "AD_VP", "17000.00", null, "100", "90"],
        ["103", "Alexander", "Hunold", "AHUNOLD", "590.423.4567", "1990-01-03", "IT_PROG", "9000.00", null, "102", "60"],
        ["104", "Bruce", "Ernst", "BERNST", "590.423.4568", "1991-05-21", "IT_PROG", "6000.00", null, "103", "60"],
        ["105", "David", "Austin", "DAUSTIN", "590.423.4569", "1997-06-25", "IT_PROG", "4800.00", null, "103", "60"],
        ["106", "Valli", "Pataballa", "VPATABAL", "590.423.4560", "1998-02-05", "IT_PROG", "4800.00", null, "103", "60"],
        ["107", "Diana", "Lorentz", "DLORENTZ", "590.423.5567", "1999-02-07", "IT_PROG", "4200.00", null, "103", "60"],
        ["108", "Nancy", "Greenberg", "NGREENBE", "515.124.4569", "1994-08-17", "FI_MGR", "12000.00", null, "101", "100"],
        ["109", "Daniel", "Faviet", "DFAVIET", "515.124.4169", "1994-08-16", "FI_ACCOUNT", "9000.00", null, "108", "100"],
        ["110", "John", "Chen", "JCHEN", "515.124.4269", "1997-09-28", "FI_ACCOUNT", "8200.00", null, "108", "100"],
        ["111", "Ismael", "Sciarra", "ISCIARRA", "515.124.4369", "1997-09-30", "FI_ACCOUNT", "7700.00", null, "108", "100"],
        ["112", "Jose Manuel", "Urman", "JMURMAN", "515.124.4469", "1998-03-07", "FI_ACCOUNT", "7800.00", null, "108", "100"],
        ["113", "Luis", "Popp", "LPOPP", "515.124.4567", "1999-12-07", "FI_ACCOUNT", "6900.00", null, "108", "100"],
        ["114", "Den", "Raphaely", "DRAPHEAL", "515.127.4561", "1994-12-07", "PU_MAN", "11000.00", null, "100", "30"],
        ["115", "Alexander", "Khoo", "AKHOO", "515.127.4562", "1995-05-18", "PU_CLERK", "3100.00", null, "114", "30"],
        ["116", "Shelli", "Baida", "SBAIDA", "515.127.4563", "1997-12-24", "PU_CLERK", "2900.00", null, "114", "30"],
        ["117", "Sigal", "Tobias", "STOBIAS", "515.127.4564", "1997-07-24", "PU_CLERK", "2800.00", null, "114", "30"],
        ["118", "Guy", "Himuro", "GHIMURO", "515.127.4565", "1998-11-15", "PU_CLERK", "2600.00", null, "114", "30"],
        ["119", "Karen", "Colmenares", "KCOLMENA", "515.127.4566", "1999-08-10", "PU_CLERK", "2500.00", null, "114", "30"],
        ["120", "Matthew", "Weiss", "MWEISS", "650.123.1234", "1996-07-18", "ST_MAN", "8000.00", null, "100", "50"],
        ["121", "Adam", "Fripp", "AFRIPP", "650.123.2234", "1997-04-10", "ST_MAN", "8200.00", null, "100", "50"],
        ["122", "Payam", "Kaufling", "PKAUFLIN", "650.123.3234", "1995-05-01", "ST_MAN", "7900.00", null, "100", "50"],
        ["123", "Shanta", "Vollman", "SVOLLMAN", "650.123.4234", "1997-10-10", "ST_MAN", "6500.00", null, "100", "50"],
        ["124", "Kevin", "Mourgos", "KMOURGOS", "650.123.5234", "1999-11-16", "ST_MAN", "5800.00", null, "100", "50"],
        ["125", "Julia", "Nayer", "JNAYER", "650.124.1214", "1997-07-16", "ST_CLERK", "3200.00", null, "120", "50"],
        ["126", "Irene", "Mikkilineni", "IMIKKILI", "650.124.1224", "1998-09-28", "ST_CLERK", "2700.00", null, "120", "50"],
        ["127", "James", "Landry", "JLANDRY", "650.124.1334", "1999-01-14", "ST_CLERK", "2400.00", null, "120", "50"],
        ["128", "Steven", "Markle", "SMARKLE", "650.124.1434", "2000-03-08", "ST_CLERK", "2200.00", null, "120", "50"],
        ["129", "Laura", "Bissot", "LBISSOT", "650.124.5234", "1997-08-20", "ST_CLERK", "3300.00", null, "121", "50"],
        ["130", "Mozhe", "Atkinson", "MATKINSO", "650.124.6234", "1997-10-30", "ST_CLERK", "2800.00", null, "121", "50"],
        ["131", "James", "Marlow", "JAMRLOW", "650.124.7234", "1997-02-16", "ST_CLERK", "2500.00", null, "121", "50"],
        ["132", "TJ", "Olson", "TJOLSON", "650.124.8234", "1999-04-10", "ST_CLERK", "2100.00", null, "121", "50"],
        ["133", "Jason", "Mallin", "JMALLIN", "650.127.1934", "1996-06-14", "ST_CLERK", "3300.00", null, "122", "50"],
        ["134", "Michael", "Rogers", "MROGERS", "650.127.1834", "1998-08-26", "ST_CLERK", "2900.00", null, "122", "50"],
        ["135", "Ki", "Gee", "KGEE", "650.127.1734", "1999-12-12", "ST_CLERK", "2400.00", null, "122", "50"],
        ["136", "Hazel", "Philtanker", "HPHILTAN", "650.127.1634", "2000-02-06", "ST_CLERK", "2200.00", null, "122", "50"],
        ["137", "Renske", "Ladwig", "RLADWIG", "650.121.1234", "1995-07-14", "ST_CLERK", "3600.00", null, "123", "50"],
        ["138", "Stephen", "Stiles", "SSTILES", "650.121.2034", "1997-10-26", "ST_CLERK", "3200.00", null, "123", "50"],
        ["139", "John", "Seo", "JSEO", "650.121.2019", "1998-02-12", "ST_CLERK", "2700.00", null, "123", "50"],
        ["140", "Joshua", "Patel", "JPATEL", "650.121.1834", "1998-04-06", "ST_CLERK", "2500.00", null, "123", "50"],
        ["141", "Trenna", "Rajs", "TRAJS", "650.121.8009", "1995-10-17", "ST_CLERK", "3500.00", null, "124", "50"],
        ["142", "Curtis", "Davies", "CDAVIES", "650.121.2994", "1997-01-29", "ST_CLERK", "3100.00", null, "124", "50"],
        ["143", "Randall", "Matos", "RMATOS", "650.121.2874", "1998-03-15", "ST_CLERK", "2600.00", null, "124", "50"],
        ["144", "Peter", "Vargas", "PVARGAS", "650.121.2004", "1998-07-09", "ST_CLERK", "2500.00", null, "124", "50"],
        ["145", "John", "Russell", "JRUSSEL", "011.44.1344.429268", "1996-10-01", "SA_MAN", "14000.00", "0.40", "100", "80"],
        ["146", "Karen", "Partners", "KPARTNER", "011.44.1344.467268", "1997-01-05", "SA_MAN", "13500.00", "0.30", "100", "80"],
        ["147", "Alberto", "Errazuriz", "AERRAZUR", "011.44.1344.429278", "1997-03-10", "SA_MAN", "12000.00", "0.30", "100", "80"],
        ["148", "Gerald", "Cambrault", "GCAMBRAU", "011.44.1344.619268", "1999-10-15", "SA_MAN", "11000.00", "0.30", "100", "80"],
        ["149", "Eleni", "Zlotkey", "EZLOTKEY", "011.44.1344.429018", "2000-01-29", "SA_MAN", "10500.00", "0.20", "100", "80"],
        ["150", "Peter", "Tucker", "PTUCKER", "011.44.1344.129268", "1997-01-30", "SA_REP", "10000.00", "0.30", "145", "80"],
        ["151", "David", "Bernstein", "DBERNSTE", "011.44.1344.345268", "1997-03-24", "SA_REP", "9500.00", "0.25", "145", "80"],
        ["152", "Peter", "Hall", "PHALL", "011.44.1344.478968", "1997-08-20", "SA_REP", "9000.00", "0.25", "145", "80"],
        ["153", "Christopher", "Olsen", "COLSEN", "011.44.1344.498718", "1998-03-30", "SA_REP", "8000.00", "0.20", "145", "80"],
        ["154", "Nanette", "Cambrault", "NCAMBRAU", "011.44.1344.987668", "1998-12-09", "SA_REP", "7500.00", "0.20", "145", "80"],
        ["155", "Oliver", "Tuvault", "OTUVAULT", "011.44.1344.486508", "1999-11-23", "SA_REP", "7000.00", "0.15", "145", "80"],
        ["156", "Janette", "King", "JKING", "011.44.1345.429268", "1996-01-30", "SA_REP", "10000.00", "0.35", "146", "80"],
        ["157", "Patrick", "Sully", "PSULLY", "011.44.1345.929268", "1996-03-04", "SA_REP", "9500.00", "0.35", "146", "80"],
        ["158", "Allan", "McEwen", "AMCEWEN", "011.44.1345.829268", "1996-08-01", "SA_REP", "9000.00", "0.35", "146", "80"],
        ["159", "Lindsey", "Smith", "LSMITH", "011.44.1345.729268", "1997-03-10", "SA_REP", "8000.00", "0.30", "146", "80"],
        ["160", "Louise", "Doran", "LDORAN", "011.44.1345.629268", "1997-12-15", "SA_REP", "7500.00", "0.30", "146", "80"],
        ["161", "Sarath", "Sewall", "SSEWALL", "011.44.1345.529268", "1998-11-03", "SA_REP", "7000.00", "0.25", "146", "80"],
        ["162", "Clara", "Vishney", "CVISHNEY", "011.44.1346.129268", "1997-11-11", "SA_REP", "10500.00", "0.25", "147", "80"],
        ["163", "Danielle", "Greene", "DGREENE", "011.44.1346.229268", "1999-03-19", "SA_REP", "9500.00", "0.15", "147", "80"],
        ["164", "Mattea", "Marvins", "MMARVINS", "011.44.1346.329268", "2000-01-24", "SA_REP", "7200.00", "0.10", "147", "80"],
        ["165", "David", "Lee", "DLEE", "011.44.1346.529268", "2000-02-23", "SA_REP", "6800.00", "0.10", "147", "80"],
        ["166", "Sundar", "Ande", "SANDE", "011.44.1346.629268", "2000-03-24", "SA_REP", "6400.00", "0.10", "147", "80"],
        ["167", "Amit", "Banda", "ABANDA", "011.44.1346.729268", "2000-04-21", "SA_REP", "6200.00", "0.10", "147", "80"],
        ["168", "Lisa", "Ozer", "LOZER", "011.44.1343.929268", "1997-03-11", "SA_REP", "11500.00", "0.25", "148", "80"],
        ["169", "Harrison", "Bloom", "HBLOOM", "011.44.1343.829268", "1998-03-23", "SA_REP", "10000.00", "0.20", "148", "80"],
        ["170", "Tayler", "Fox", "TFOX", "011.44.1343.729268", "1998-01-24", "SA_REP", "9600.00", "0.20", "148", "80"],
        ["171", "William", "Smith", "WSMITH", "011.44.1343.629268", "1999-02-23", "SA_REP", "7400.00", "0.15", "148", "80"],
        ["172", "Elizabeth", "Bates", "EBATES", "011.44.1343.529268", "1999-03-24", "SA_REP", "7300.00", "0.15", "148", "80"],
        ["173", "Sundita", "Kumar", "SKUMAR", "011.44.1343.329268", "2000-04-21", "SA_REP", "6100.00", "0.10", "148", "80"],
        ["174", "Ellen", "Abel", "EABEL", "011.44.1644.429267", "1996-05-11", "SA_REP", "11000.00", "0.30", "149", "80"],
        ["175", "Alyssa", "Hutton", "AHUTTON", "011.44.1644.429266", "1997-03-19", "SA_REP", "8800.00", "0.25", "149", "80"],
        ["176", "Jonathon", "Taylor", "JTAYLOR", "011.44.1644.429265", "1998-03-24", "SA_REP", "8600.00", "0.20", "149", "80"],
        ["177", "Jack", "Livingston", "JLIVINGS", "011.44.1644.429264", "1998-04-23", "SA_REP", "8400.00", "0.20", "149", "80"],
        ["178", "Kimberely", "Grant", "KGRANT", "011.44.1644.429263", "1999-05-24", "SA_REP", "7000.00", "0.15", "149", null],
        ["179", "Charles", "Johnson", "CJOHNSON", "011.44.1644.429262", "2000-01-04", "SA_REP", "6200.00", "0.10", "149", "80"],
        ["180", "Winston", "Taylor", "WTAYLOR", "650.507.9876", "1998-01-24", "SH_CLERK", "3200.00", null, "120", "50"],
        ["181", "Jean", "Fleaur", "JFLEAUR", "650.507.9877", "1998-02-23", "SH_CLERK", "3100.00", null, "120", "50"],
        ["182", "Martha", "Sullivan", "MSULLIVA", "650.507.9878", "1999-06-21", "SH_CLERK", "2500.00", null, "120", "50"],
        ["183", "Girard", "Geoni", "GGEONI", "650.507.9879", "2000-02-03", "SH_CLERK", "2800.00", null, "120", "50"],
        ["184", "Nandita", "Sarchand", "NSARCHAN", "650.509.1876", "1996-01-27", "SH_CLERK", "4200.00", null, "121", "50"],
        ["185", "Alexis", "Bull", "ABULL", "650.509.2876", "1997-02-20", "SH_CLERK", "4100.00", null, "121", "50"],
        ["186", "Julia", "Dellinger", "JDELLING", "650.509.3876", "1998-06-24", "SH_CLERK", "3400.00", null, "121", "50"],
        ["187", "Anthony", "Cabrio", "ACABRIO", "650.509.4876", "1999-02-07", "SH_CLERK", "3000.00", null, "121", "50"],
        ["188", "Kelly", "Chung", "KCHUNG", "650.505.1876", "1997-06-14", "SH_CLERK", "3800.00", null, "122", "50"],
        ["189", "Jennifer", "Dilly", "JDILLY", "650.505.2876", "1997-08-13", "SH_CLERK", "3600.00", null, "122", "50"],
        ["190", "Timothy", "Gates", "TGATES", "650.505.3876", "1998-07-11", "SH_CLERK", "2900.00", null, "122", "50"],
        ["191", "Randall", "Perkins", "RPERKINS", "650.505.4876", "1999-12-19", "SH_CLERK", "2500.00", null, "122", "50"],
        ["192", "Sarah", "Bell", "SBELL", "650.501.1876", "1996-02-04", "SH_CLERK", "4000.00", null, "123", "50"],
        ["193", "Britney", "Everett", "BEVERETT", "650.501.2876", "1997-03-03", "SH_CLERK", "3900.00", null, "123", "50"],
        ["194", "Samuel", "McCain", "SMCCAIN", "650.501.3876", "1998-07-01", "SH_CLERK", "3200.00", null, "123", "50"],
        ["195", "Vance", "Jones", "VJONES", "650.501.4876", "1999-03-17", "SH_CLERK", "2800.00", null, "123", "50"],
        ["196", "Alana", "Walsh", "AWALSH", "650.507.9811", "1998-04-24", "SH_CLERK", "3100.00", null, "124", "50"],
        ["197", "Kevin", "Feeney", "KFEENEY", "650.507.9822", "1998-05-23", "SH_CLERK", "3000.00", null, "124", "50"],
        ["198", "Donald", "OConnell", "DOCONNEL", "650.507.9833", "1999-06-21", "SH_CLERK", "2600.00", null, "124", "50"],
        ["199", "Douglas", "Grant", "DGRANT", "650.507.9844", "2000-01-13", "SH_CLERK", "2600.00", null, "124", "50"],
        ["200", "Jennifer", "Whalen", "JWHALEN", "515.123.4444", "1987-09-17", "AD_ASST", "4400.00", null, "101", "10"],
        ["201", "Michael", "Hartstein", "MHARTSTE", "515.123.5555", "1996-02-17", "MK_MAN", "13000.00", null, "100", "20"],
        ["202", "Pat", "Fay", "PFAY", "603.123.6666", "1997-08-17", "MK_REP", "6000.00", null, "201", "20"],
        ["203", "Susan", "Mavris", "SMAVRIS", "515.123.7777", "1994-06-07", "HR_REP", "6500.00", null, "101", "40"],
        ["204", "Hermann", "Baer", "HBAER", "515.123.8888", "1994-06-07", "PR_REP", "10000.00", null, "101", "70"],
        ["205", "Shelley", "Higgins", "SHIGGINS", "515.123.8080", "1994-06-07", "AC_MGR", "12000.00", null, "101", "110"],
        ["206", "William", "Gietz", "WGIETZ", "515.123.8181", "1994-06-07", "AC_ACCOUNT", "8300.00", null, "205", "110"]
    ];
    return Employees;
}());
exports.Employees = Employees;