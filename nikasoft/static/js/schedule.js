var f = void 0, g = !0, i = !1, aa, da;
function ea() {
    l = m = 0;
    n.classes.a = i;
    n.teachers.a = i;
    o.school.color = fa;
    o.city.color = fa;
    o.school.a = g;
    o.city.a = g;
    p("go_home").style.color = "#FFFFFF";
    n.NL.a = i;
    n.NLs.a = g;
    o.title.a = g;
    o.period.a = i;
    n.changes.a = i;
    o.change_ln1.a = i;
    o.change_ln2.a = i;
    n.arrow_left.a = i;
    n.arrow_right.a = i;
    o.prev_week_ln1.a = i;
    o.prev_week_ln2.a = i;
    o.next_week_ln1.a = i;
    o.next_week_ln2.a = i;
    o.prev_month_ln1.a = i;
    o.prev_month_ln2.a = i;
    o.next_month_ln1.a = i;
    o.next_month_ln2.a = i;
    o.prev_day_ln2.a = i;
    o.next_day_ln2.a = i;
    o.exp_lab.a = i;
    o.exp_dt.a = i;
    window.NIKA.SHOW_EXPORT_DT && (o.exp_lab.a = g,
    o.exp_dt.a = g)
}
function ga(a, c) {
    var b = q.width - ia - 50;
    b < q.width / 2 + 180 / a + 20 && (b = q.width / 2 + 180 / a + 20);
    ja = Math.round(140 + 55 * (1 - a));
    o.school.x = b;
    o.school.y = 0.3 * ja;
    o.city.x = b;
    o.city.y = 0.5 * ja;
    p("go_home").style.left = b.toString() + "px";
    p("go_home").style.top = Math.round(0.7 * ja) + "px";
    n.NLs.x = 140;
    n.NLs.y = q.height - ka + 10;
    p("copyright").style.left = (n.NLs.x + 64).toString() + "px";
    p("copyright").style.top = (n.NLs.y + 24).toString() + "px";
    o.title.x = q.width / 2;
    "RUS" == la ? (o.title.y = ja + 78,
    o.period.y = ja + 105) : "ENG" == la && (o.title.y = ja + 75,
    o.period.y = ja + 110);
    o.exp_lab.a && (o.exp_lab.x = q.width / 2,
    o.exp_lab.y = q.height - 50,
    o.exp_dt.x = q.width / 2,
    o.exp_dt.y = q.height - 50 + 30 / a);
    c && (r = ja + 135,
    t = Math.round(q.width - 450 + 307 * (a - 1)),
    t > ma && (t = ma),
    v = Math.round(na * t / ma),
    v > q.height - r - ka - 30 && (v = q.height - r - ka - 30,
    t = Math.round(ma * v / na)),
    w = q.width / 2 - t / 2,
    x = t,
    y = v)
}
function oa(a) {
    n.LeftScrll.x = w - n.LeftScrll.f - 15;
    n.RightScrll.x = w + t + 15;
    a ? (n.LeftScrll.y = r + v - 3 * n.LeftScrll.d,
    n.RightScrll.y = r + v - 3 * n.RightScrll.d) : (n.LeftScrll.y = r + v / 2 - n.LeftScrll.d / 2,
    n.RightScrll.y = r + v / 2 - n.RightScrll.d / 2);
    n.UpScrll.x = w + t + 10;
    n.UpScrll.y = r;
    n.DownScrll.x = w + t + 10;
    n.DownScrll.y = r + v - n.DownScrll.d
}
function qa(a, c) {
    a.fillStyle = "#FFFFFF";
    a.fillRect(0, 0, q.width, q.height);
    for (var b = 0; b < q.width; ) {
        for (var e = ja; e < q.height - ka; )
            a.drawImage(ra, b, e),
            e += ra.height;
        b += ra.width
    }
    a.fillStyle = sa;
    a.fillRect(0, 0, q.width, ja);
    a.fillRect(0, q.height - ka, q.width, q.height);
    a.drawImage(ta, 0, 0, ta.width, ta.height, 0, ja, q.width, 23 / c);
    a.drawImage(ua, 0, 0, ua.width, ua.height, 0, q.height - ka - 16, q.width, 23)
}
function wa() {
    var a = "";
    if ("RUS" == la)
        switch (CurrWeekNum) {
        case 0:
            a = "" + (NIKA.SCHEDULE_STR.toLowerCase() + " " + NIKA.FOR_WEEK);
            break;
        case 1:
            a = "" + (NIKA.SCHEDULE_STR.toLowerCase() + " " + NIKA.FOR_1WEEK);
            break;
        case 2:
            a = "" + (NIKA.SCHEDULE_STR.toLowerCase() + " " + NIKA.FOR_2WEEK)
        }
    else
        a = "" + (NIKA.FOR_WEEK + " " + NIKA.SCHEDULE_STR.toLowerCase()),
        1 == CurrWeekNum && (a += " " + NIKA.FOR_1WEEK),
        2 == CurrWeekNum && (a += " " + NIKA.FOR_2WEEK);
    return a = a.charAt(0).toUpperCase() + a.slice(1)
}
function xa(a) {
    var c = 140 / ja;
    a.save();
    a.setTransform(1 / c, 0, 0, 1 / c, 100, 20);
    a.font = "normal 18px Verdana, sans-serif";
    a.textAlign = "center";
    a.textBaseline = "top";
    a.shadowOffsetX = 0;
    a.shadowOffsetY = 0;
    a.fillStyle = fa;
    ya && a.fillText(ya, 64, 0, 80);
    za && a.fillText(za, 64, 20, 80);
    a.font = "bold 34px Arial, sans-serif";
    Ba && a.fillText(Ba, 64, 46, 80);
    a.font = "normal 18px Verdana, sans-serif";
    Ca && a.fillText(Ca, 64, 78, 80);
    if (ya || za)
        a.strokeStyle = fa,
        a.lineWidth = 3,
        a.strokeRect(20, -5, 92, 110);
    a.font = "bold 48px Arial, sans-serif";
    Da && a.fillText(Da, 192, 0);
    a.font = "bold 48px Times, sans-serif";
    Ea && Da && a.fillText(Ea, 192, -4);
    a.font = "normal 20px Verdana, sans-serif";
    Fa && a.fillText(Fa, 192, 50);
    Ga && a.fillText(Ga, 192, 74);
    a.restore()
}
function Ha(a, c) {
    a.save();
    a.setTransform(1 / c, 0, 0, 1 / c, q.width / 2, ja / 2);
    a.fillStyle = fa;
    a.fillRect(-180, -55, 360, 110);
    a.font = "bold 20px Verdana, sans-serif";
    a.textAlign = "center";
    a.textBaseline = "top";
    a.fillStyle = Ia;
    var b = NIKA.TEACHERS[z]
      , e = b
      , h = ""
      , j = b.indexOf(" ");
    -1 < j && (h = b.substr(j + 1, b.length),
    7 >= h.length ? h = "" : e = b.substr(0, j));
    h ? (a.fillText(e, 0, -32),
    a.fillText(h, 0, -8),
    b = 20) : (a.fillText(b, 0, -16),
    b = 14);
    Ja && (a.font = "bold 16px Verdana, sans-serif",
    a.textAlign = "center",
    a.fillStyle = sa,
    a.fillText(Ja, 0, b));
    a.fillStyle = Ka;
    a.save();
    a.translate(-172, -46);
    a.rotate(-0.785);
    a.fillRect(-20, -6, 40, 12);
    a.restore();
    a.translate(172, -46);
    a.rotate(0.785);
    a.fillRect(-20, -6, 40, 12);
    a.restore()
}
function La(a, c) {
    a.save();
    a.setTransform(1 / c, 0, 0, 1 / c, q.width / 2, ja / 2);
    a.fillStyle = fa;
    a.fillRect(-90, -55, 180, 110);
    a.font = "bold 28px Verdana, sans-serif";
    a.textAlign = "center";
    a.textBaseline = "top";
    a.fillStyle = Ia;
    a.fillText(NIKA.CLASSES[A], 0, -30);
    a.fillStyle = Ma;
    a.font = "normal 18px Verdana, sans-serif";
    var b = NIKA.CLASS_STR.toLowerCase();
    ":" == b.charAt(b.length - 1) && (b = b.substr(0, b.length - 1));
    a.fillText(b, 0, 5);
    Na && (a.fillStyle = Oa,
    a.fillText(Na, 0, 26));
    a.fillStyle = Ka;
    a.save();
    a.translate(-82, -46);
    a.rotate(-0.785);
    a.fillRect(-20, -6, 40, 12);
    a.restore();
    a.translate(82, -46);
    a.rotate(0.785);
    a.fillRect(-20, -6, 40, 12);
    a.restore()
}
window.tabs = {
    home: {
        i: "",
        l: function() {
            ea();
            Pa = l = m = v = t = r = w = 0;
            C = {
                x: 0,
                y: 0
            };
            Qa = {
                x: 0,
                y: 0
            };
            y = x = 0;
            D = E = 1;
            Ra = 0;
            o.title.a = i;
            n.classes.a = g;
            n.teachers.a = NIKA.SHOW_TEACHERS;
            o.school.color = "#FFFFFF";
            o.city.color = "#FFFFFF";
            o.school.a = g;
            o.city.a = g;
            n.NL.a = g;
            n.NLs.a = i;
            o.exp_lab.a = i;
            o.exp_dt.a = i;
            window.NIKA.SHOW_EXPORT_DT && (o.exp_lab.a = g,
            o.exp_dt.a = g);
            p("go_home").style.color = "#00FFFF"
        },
        j: function(a, c) {
            var b = q.width
              , e = q.height;
            e > Sa.height && (b *= Sa.height / q.height,
            b > Sa.width && (b = Sa.width),
            e = Sa.height);
            var h = Sa.width - q.width;
            0 > h && (h = 0);
            260 < h && (h = 260);
            a.drawImage(Sa, h, Sa.height - e, b, e, 0, 0, q.width, q.height);
            a.save();
            a.setTransform(1 / c, 0, 0, 1 / c, 100 / c, 30);
            a.rotate(-0.04);
            a.drawImage(Ta, 0, 0, Ta.width, Ta.height);
            a.font = "normal 18px Verdana , sans-serif";
            a.textAlign = "center";
            a.textBaseline = "top";
            a.shadowOffsetX = 0;
            a.shadowOffsetY = 0;
            a.fillStyle = "#FFFFFF";
            ya && a.fillText(ya, 64, 72, 80);
            za && a.fillText(za, 64, 92, 80);
            a.font = "bold 34px Arial, sans-serif";
            Ba && a.fillText(Ba, 64, 118, 80);
            a.font = "normal 18px Verdana, sans-serif";
            Ca && a.fillText(Ca, 64, 150, 80);
            a.font = "bold 48px Arial, sans-serif";
            a.fillStyle = "#000";
            Da && a.fillText(Da, 192, 72);
            a.font = "bold 48px Times, sans-serif";
            Ea && Da && a.fillText(Ea, 192, 68);
            a.font = "normal 22px Verdana, sans-serif";
            a.fillStyle = "#3B3E3F";
            Fa && a.fillText(Fa, 192, 126);
            Ga && a.fillText(Ga, 192, 154);
            a.restore();
            a.drawImage(Ua, q.width / 2 - Ua.width / c / 2, 380 / c, Ua.width / c, Ua.height / c)
        },
        m: function(a) {
            var c = q.width - ia - 50;
            o.school.x = c;
            o.school.y = 50;
            o.city.x = c;
            o.city.y = 76;
            p("go_home").style.left = c.toString() + "px";
            p("go_home").style.top = "116px";
            n.NL.x = 140;
            n.NL.y = q.height - 127;
            p("copyright").style.left = (n.NL.x + 96).toString() + "px";
            p("copyright").style.top = (n.NL.y + 60).toString() + "px";
            n.classes.f = Va / a;
            n.classes.d = Wa / a;
            o.exp_lab.x = 250 / a;
            o.exp_lab.y = 30 + 230 / a;
            o.exp_dt.x = 250 / a;
            o.exp_dt.y = 30 + 260 / a;
            n.teachers.a ? (n.teachers.f = n.teachers.hasOwnProperty("caption") && 7 < n.teachers.caption.length ? 1.05 * Va * n.teachers.caption.length / (8 * a) : Va / a,
            n.teachers.d = Wa / a,
            n.classes.x = q.width / 2 - n.classes.f - 80 / a,
            n.classes.y = 600 / a,
            n.teachers.x = q.width / 2 + 80 / a,
            n.teachers.y = 600 / a) : (n.classes.x = q.width / 2 - n.classes.f / 2,
            n.classes.y = 600 / a)
        },
        k: function() {},
        h: function(a) {
            function c(b) {
                return b.a && a.x >= b.x && a.x <= b.x + b.f && a.y >= b.y && a.y <= b.y + b.d
            }
            return c(n.classes) ? 0 : c(n.teachers) ? 1 : -1
        },
        n: function() {}
    },
    classes: {
        i: "home",
        l: function() {
            ea();
            Ya = 0;
            for (var a in NIKA.CLASSES)
                NIKA.CLASSES[a].length > Ya && (Ya = NIKA.CLASSES[a].substr(0, 12).length);
            CLASS_BTN_TOP_LINE = 14;
            5 < Ya && (Ya = 6);
            da = [];
            for (Za in NIKA.CLASSES)
                NIKA.CLASSES.hasOwnProperty(Za) && da.push(Za);
            da.sort(function(a, b) {
                return $a(a) > $a(b) ? 1 : $a(a) < $a(b) ? -1 : NIKA.CLASSES[a] > NIKA.CLASSES[b] ? 1 : NIKA.CLASSES[a] < NIKA.CLASSES[b] ? -1 : 0
            })
        },
        m: function(a) {
            ga(a, i);
            r = ja + 100;
            t = Math.round(q.width - 400 + 357 * (a - 1));
            v = q.height - r - ka - 30;
            ab = Math.round(v / 7);
            76 < ab && (ab = 76);
            45 > ab && (ab = 45);
            bb = Math.round(0.67 * ab);
            cb = Math.round(24 * bb / 76 + 16 * Ya);
            db = Math.round(t / 12);
            30 > db - cb && (db = cb + 30);
            55 < db - cb && (db = cb + 55);
            x = 0;
            y = L;
            eb(function(a, b) {
                a + db > x && (x = a + db);
                b + ab > y && (y = b + ab)
            });
            t > x ? t = x : x += 2 * L - (db - cb);
            300 > q.width - (w + t) && (w = q.width - t - 300);
            v > y && (v = y);
            w = q.width / 2 - t / 2;
            E = db;
            D = ab;
            Ra = 15;
            oa(i)
        },
        j: function(a, c) {
            var b = ("" + (NIKA.SCHEDULE_STR + " " + NIKA.FOR_CLASS_STR)).toLowerCase()
              , b = b.charAt(0).toUpperCase() + b.slice(1);
            qa(a, c);
            o.title.caption = b;
            xa(a)
        },
        k: function(a) {
            var c = -1
              , b = 0
              , e = 0;
            eb(function(h, j, s) {
                j > b && c++;
                b = j;
                e++;
                N == s ? (a.fillStyle = fb,
                a.fillRect(h, j, cb, bb)) : (a.fillStyle = gb[c % gb.length],
                a.fillRect(h, j, cb, bb),
                a.drawImage(hb[e % hb.length], 0, 0, 98, 51, h, j, cb, bb))
            });
            a.font = "bold 22px Arial";
            a.textAlign = "center";
            a.textBaseline = "top";
            eb(function(e, b, c) {
                a.fillStyle = N == c ? ib : Ia;
                a.fillText(NIKA.CLASSES[c].substr(0, 11), e + cb / 2, b + bb / 2 - 10)
            })
        },
        h: function(a) {
            if (a.x < L || a.y < L || a.x > x - L || a.y > y - L + 15)
                return -1;
            var c = -1;
            eb(function(b, e, h) {
                a.x >= b && a.y >= e && a.x < b + cb && a.y < e + bb && (c = h)
            });
            return c
        },
        n: function() {
            -1 != N && (A = N,
            jb(new Date),
            kb("classched"))
        }
    },
    teachers: {
        i: "home",
        l: function() {
            ea();
            l = Pa;
            aa = [];
            for (Za in NIKA.TEACHERS)
                NIKA.TEACHERS.hasOwnProperty(Za) && aa.push(Za);
            aa.sort(function(a, e) {
                return NIKA.TEACHERS[a] > NIKA.TEACHERS[e] ? 1 : NIKA.TEACHERS[a] < NIKA.TEACHERS[e] ? -1 : 0
            });
            x = 0;
            y = 2 * L + lb;
            var a, c, b;
            mb = 0;
            NIKA.z = [];
            for (var e in NIKA.TEACHERS)
                if (a = NIKA.TEACHERS[e],
                17 < a.length && (b = a.indexOf(" "),
                -1 < b && (c = a.substr(0, b) + " " + a[b + 1] + ".",
                b = a.indexOf(" ", b + 1),
                -1 < b && (c += " " + a[b + 1] + ".")),
                a = c),
                22 < a.length && (a = a.substr(0, 19) + "..."),
                NIKA.z[e] = a,
                a.length > mb)
                    mb = a.length;
            22 < mb && (mb = 22);
            9 > mb && (mb = 8)
        },
        m: function(a) {
            ga(a, i);
            r = ja + 100;
            t = Math.round(q.width - 400 + 357 * (a - 1));
            v = q.height - r - ka - 30;
            lb = Math.round(v / 7);
            82 < lb && (lb = 82);
            45 > lb && (lb = 45);
            nb = Math.round(0.62 * ab);
            ob = Math.round(24 * nb / 76 + 12 * mb);
            for (pb = 5; 1 < pb && 2 * L + pb * (ob + 30) - 30 > t; )
                pb--;
            qb = Math.round((t - 2 * L) / pb);
            x = t = pb * qb + 2 * L - (qb - ob);
            y = L;
            rb(function(a, b) {
                b + lb > y && (y = b + lb)
            });
            300 > q.width - (w + t) && (w = q.width - t - 300);
            w = q.width / 2 - t / 2;
            E = qb;
            D = lb;
            Ra = 15;
            oa(i)
        },
        j: function(a, c) {
            var b = ("" + (NIKA.SCHEDULE_STR + " " + NIKA.FOR_TEACHER_STR)).toLowerCase()
              , b = b.charAt(0).toUpperCase() + b.slice(1);
            qa(a, c);
            o.title.caption = b;
            xa(a)
        },
        k: function(a) {
            a.lineWidth = 2;
            a.fillStyle = "#FFFFFF";
            var c = 0;
            rb(function(b, e, h) {
                c++;
                a.fillRect(b, e, ob, nb);
                N == h ? (a.strokeStyle = fb,
                a.drawImage(sb[c % tb.length], 0, 0, 98, 51, b, e, ob, nb)) : (a.strokeStyle = sa,
                a.drawImage(tb[c % tb.length], 0, 0, 98, 51, b, e, ob, nb));
                a.strokeRect(b, e, ob, nb)
            });
            a.font = "bold 22px Arial";
            a.textAlign = "center";
            a.textBaseline = "top";
            a.fillStyle = Ia;
            rb(function(b, e, c) {
                a.fillText(NIKA.z[c], b + ob / 2, e + nb / 2 - 10)
            })
        },
        h: function(a) {
            if (a.x < L || a.y < L || a.x > x - L || a.y > y - L + 20)
                return -1;
            var c = -1;
            rb(function(b, e, h) {
                a.x >= b && a.y >= e && a.x < b + ob && a.y < e + nb && (c = h)
            });
            return c
        },
        n: function() {
            -1 != N && (z = N,
            jb(new Date),
            Pa = l,
            kb("teachsched"))
        }
    },
    teachsched: {
        i: "teachers",
        l: function() {
            ea();
            o.period.a = g;
            ub(0)
        },
        m: function(a) {
            ga(a, i);
            vb = Math.round(0.9 * P);
            wb = Math.round(0.9 * xb);
            x = vb + P * NIKA.WEEKDAYNUM + 1;
            y = wb + xb * NIKA.LESSONSINDAY + 1;
            NIKA.FIRSTLESSONNUM || (y += xb);
            E = P;
            D = xb;
            t = Math.round(q.width - 450 + 307 * (a - 1));
            t > x && (t = x);
            w = q.width / 2 - t / 2;
            r = ja + 124;
            v = q.height - r - ka - 30;
            v > y && (v = y);
            o.period.x = w + t / 2;
            Ra = 0;
            n.changes.x = w - Math.round(160 / a);
            n.changes.y = r - Math.round(80 / a);
            n.changes.f = Math.round(206 / a);
            n.changes.d = Math.round(206 / a);
            o.change_ln1.x = n.changes.x + n.changes.f / 2;
            o.change_ln2.x = o.change_ln1.x;
            o.change_ln1.y = n.changes.y + Math.round(0.55 * n.changes.d);
            o.change_ln2.y = o.change_ln1.y + Math.round(22 / a);
            yb && (n.arrow_left.x = w - 87,
            n.arrow_left.y = r + v / 2,
            n.arrow_right.x = w + t + 20,
            n.arrow_right.y = n.arrow_left.y,
            o.prev_week_ln1.x = w - 110,
            o.prev_week_ln1.y = n.arrow_left.y - 30,
            o.prev_week_ln2.x = w - 110,
            o.prev_week_ln2.y = n.arrow_left.y - 10,
            o.next_week_ln1.x = n.arrow_right.x,
            o.next_week_ln1.y = n.arrow_right.y - 30,
            o.next_week_ln2.x = n.arrow_right.x,
            o.next_week_ln2.y = n.arrow_right.y - 10);
            oa(g)
        },
        j: function(a, c) {
            var b = wa();
            qa(a, c);
            o.title.caption = b;
            xa(a);
            Ha(a, c)
        },
        k: function(a) {
            a.textBaseline = "top";
            a.shadowOffsetX = 0;
            a.shadowOffsetY = 0;
            var c, b, e, h, j, s, u, O, R, Y, ba;
            c = vb;
            dat = new Date(S);
            for (var M = 0; M < NIKA.WEEKDAYNUM; M++) {
                h = (h = dat.getDay()) ? h : 7;
                e = zb(dat);
                var va = function(e, b, h) {
                    a.font = b + " 18px Arial";
                    a.measureText(h).width > P - 40 && (a.font = b + " 16px Arial");
                    a.measureText(h).width > P - 40 && (a.font = b + " 14px Arial");
                    a.measureText(h).width > P - 40 && (a.font = b + " 12px Arial");
                    a.measureText(h).width > P - 40 && (h = h.substr(0, 28) + "...");
                    a.fillStyle = Ab && ba ? Bb : e;
                    FreeTeacher ? Cb && (a.fillText(h, c + P / 2, Y),
                    a.strokeStyle = Bb,
                    a.strokeRect(c + P / 2 - a.measureText(h).width / 2, Y + 10, a.measureText(h).width, 1)) : a.fillText(h, c + P / 2, Y);
                    Y += 20
                };
                b = wb;
                a.textAlign = "center";
                for (var J = NIKA.FIRSTLESSONNUM; J <= NIKA.LESSONSINDAY; J++) {
                    j = h.toString() + Db(J);
                    FreeTeacher = i;
                    O = s = u = "";
                    Y = b + 10;
                    R = "";
                    ba = i;
                    if (window.NIKA.TEACH_EXCHANGE && window.NIKA.TEACH_EXCHANGE[z] && window.NIKA.TEACH_EXCHANGE[z][T(dat)] && window.NIKA.TEACH_EXCHANGE[z][T(dat)][J] && (ba = g,
                    FreeTeacher = "F" == NIKA.TEACH_EXCHANGE[z][T(dat)][J].s,
                    !FreeTeacher)) {
                        for (var Aa in NIKA.TEACH_EXCHANGE[z][T(dat)][J].c)
                            u && (u += ", "),
                            u += NIKA.CLASSES[NIKA.TEACH_EXCHANGE[z][T(dat)][J].c[Aa]];
                        NIKA.USEROOMS && window.NIKA.TEACH_EXCHANGE[z][T(dat)][J].r && (O = "(" + NIKA.ROOMS[NIKA.TEACH_EXCHANGE[z][T(dat)][J].r] + ")",
                        14 > u.length + O.length && (u += " " + O,
                        O = ""));
                        if (window.NIKA.TEACH_EXCHANGE[z][T(dat)][J].g)
                            for (var ca in NIKA.TEACH_EXCHANGE[z][T(dat)][J].g)
                                s = NIKA.TEACH_EXCHANGE[z][T(dat)][J].g[ca],
                                -1 != s && (s = NIKA.CLASSGROUPS[s],
                                -1 == R.indexOf(s) && (R && (R += ","),
                                R += s));
                        s = NIKA.SUBJECTS[NIKA.TEACH_EXCHANGE[z][T(dat)][J].s]
                    }
                    a.fillStyle = J & 1 ^ h & 1 ? Eb : Fb;
                    a.fillRect(c, b, P, xb);
                    if (!ba || FreeTeacher)
                        for (; ; )
                            if (window.NIKA.TEACH_SCHEDULE[e] && window.NIKA.TEACH_SCHEDULE[e][z] && window.NIKA.TEACH_SCHEDULE[e][z][j]) {
                                if ("M" == window.NIKA.TEACH_SCHEDULE[e][z][j].s)
                                    a.fillStyle = J & 1 ^ h & 1 ? Gb : Hb,
                                    a.fillRect(c, b, P, xb);
                                else {
                                    for (Aa in NIKA.TEACH_SCHEDULE[e][z][j].c)
                                        u && (u += ", "),
                                        u += NIKA.CLASSES[NIKA.TEACH_SCHEDULE[e][z][j].c[Aa]];
                                    NIKA.USEROOMS && window.NIKA.TEACH_SCHEDULE[e][z][j].r && (O = "(" + NIKA.ROOMS[NIKA.TEACH_SCHEDULE[e][z][j].r] + ")",
                                    14 > u.length + O.length && (u += " " + O,
                                    O = ""));
                                    if (window.NIKA.TEACH_SCHEDULE[e][z][j].g)
                                        for (ca in NIKA.TEACH_SCHEDULE[e][z][j].g)
                                            s = NIKA.TEACH_SCHEDULE[e][z][j].g[ca],
                                            -1 != s && (s = NIKA.CLASSGROUPS[s],
                                            -1 == R.indexOf(s) && (R && (R += ","),
                                            R += s));
                                    s = NIKA.SUBJECTS[NIKA.TEACH_SCHEDULE[e][z][j].s]
                                }
                                break
                            } else if (0 < CurrWeekNum && 3 == j.length)
                                j = CurrWeekNum.toString() + j;
                            else
                                break;
                    s && (u && va(Ma, "bold", u),
                    O && va(Ma, "bold", O),
                    R && va(Ib, "italic", R),
                    (-1 == Jb && 50 > Y - b - 10 || -1 != Jb && s != Jb) && va(Ma, "bold", s));
                    b += xb
                }
                dat.setDate(dat.getDate() + 1);
                c += P
            }
            a.translate(0, l);
            a.fillStyle = "#FFFFFF";
            a.fillRect(0, 0, x, wb);
            a.translate(0, -l);
            dat = new Date(S);
            a.translate(0, l);
            c = vb;
            for (M = 0; M < NIKA.WEEKDAYNUM; M++)
                h = (h = dat.getDay()) ? h : 7,
                a.fillStyle = h & 1 ? Kb : Lb,
                a.fillRect(c, 0, P, wb),
                a.fillStyle = Ia,
                a.font = "bold 22px Arial, sans-serif",
                a.textAlign = "center",
                a.fillText(NIKA.DAY_NAMESH[h - 1], c + P / 2, 14),
                a.font = "normal 16px Arial",
                a.fillStyle = Mb,
                a.fillText(T(dat), c + P / 2, wb - 24),
                window.NIKA.TEACH_EXCHANGE && window.NIKA.TEACH_EXCHANGE[z] && window.NIKA.TEACH_EXCHANGE[z][T(dat)] && (a.strokeStyle = Nb,
                a.lineWidth = 2,
                a.strokeRect(c + 1, 2, P - 4, wb - 2)),
                dat.setDate(dat.getDate() + 1),
                c += P;
            a.translate(0, -l);
            a.translate(m, 0);
            a.fillStyle = "#FFFFFF";
            a.fillRect(0, 0, vb, y);
            b = wb;
            for (J = NIKA.FIRSTLESSONNUM; J <= NIKA.LESSONSINDAY; J++)
                a.fillStyle = J & 1 ? Kb : Lb,
                a.fillRect(0, b, vb, xb),
                a.fillStyle = Ia,
                a.font = "bold 22px Arial, sans-serif",
                a.textAlign = "center",
                a.fillText(J.toString() + " " + NIKA.LESSON_STR, vb / 2, b + 14),
                a.textAlign = "center",
                a.fillStyle = Mb,
                a.font = "normal 16px Arial, sans-serif",
                a.fillText(NIKA.LESSON_TIMES[J][0] + " - " + NIKA.LESSON_TIMES[J][1], vb / 2, b + 42),
                b += xb;
            a.translate(-m, 0);
            a.translate(m, l);
            a.fillStyle = Lb;
            a.fillRect(0, 0, vb, wb);
            a.translate(-m, -l)
        },
        h: function() {
            return -1
        },
        p: function() {
            ub(-7);
            window.onresize()
        },
        o: function() {
            ub(7);
            window.onresize()
        },
        w: function() {
            kb("teachcalendar")
        }
    },
    teachcalendar: {
        i: "teachsched",
        l: function() {
            ea();
            o.period.a = g;
            Ob(0);
            o.prev_month_ln1.a = g;
            o.prev_month_ln2.a = g;
            o.next_month_ln1.a = g;
            o.next_month_ln2.a = g
        },
        m: function(a) {
            ga(a, g);
            o.period.x = w + t / 2;
            n.arrow_left.x = w - 87;
            n.arrow_left.y = r + v / 2;
            n.arrow_right.x = w + t + 20;
            n.arrow_right.y = n.arrow_left.y;
            o.prev_month_ln1.x = w - 110;
            o.prev_month_ln1.y = n.arrow_left.y - 30;
            o.prev_month_ln2.x = w - 110;
            o.prev_month_ln2.y = n.arrow_left.y - 10;
            o.next_month_ln1.x = n.arrow_right.x;
            o.next_month_ln1.y = n.arrow_right.y - 30;
            o.next_month_ln2.x = n.arrow_right.x;
            o.next_month_ln2.y = n.arrow_right.y - 10;
            oa(g)
        },
        j: function(a, c) {
            qa(a, c);
            xa(a);
            Ha(a, c)
        },
        k: function(a) {
            Pb(a, function(a) {
                return window.NIKA.TEACH_EXCHANGE && window.NIKA.TEACH_EXCHANGE[z] && window.NIKA.TEACH_EXCHANGE[z][T(a)] ? g : i
            })
        },
        h: function(a) {
            for (var c, b = Qb.getMonth(), e = e = new Date(Qb.getFullYear(),Qb.getMonth(),1), h = Math.round(Rb * t / ma); e.getMonth() == b; ) {
                c = (c = e.getDay()) ? c : 7;
                if (a.y >= h && a.y <= h + Math.round(Sb * t / ma))
                    return e;
                7 == c && (h += Math.round(Sb * t / ma));
                e.setDate(e.getDate() + 1)
            }
            return -1
        },
        n: function() {
            -1 != N && (jb(N),
            kb("teachsched"))
        },
        p: function() {
            Ob(-1)
        },
        o: function() {
            Ob(1)
        }
    },
    classched: {
        i: "classes",
        l: function() {
            ea();
            o.period.a = g;
            Tb(0)
        },
        m: function(a) {
            ga(a, i);
            r = ja + 124;
            t = Math.round(q.width - 450 + 307 * (a - 1));
            v = q.height - r - ka - 30;
            for (Ub = 3; 1 < Ub; ) {
                Vb = Wb;
                x = Ub * Xb + (Ub - 1) * Vb;
                t < x && (Vb = Math.round((t - 20 - Ub * Xb) / (Ub - 1)),
                Vb < Yb && (Vb = Yb),
                x = Ub * Xb + (Ub - 1) * Vb);
                if (t >= x) {
                    t = x;
                    break
                }
                Ub--
            }
            w = q.width / 2 - t / 2;
            for (var c = Math.ceil(NIKA.WEEKDAYNUM / Ub), b = c, e = Zb + $b * ac; ; )
                if (1 < b)
                    if (bc = Math.round((v - b * e) / (b - 1)),
                    bc < Yb)
                        b--;
                    else
                        break;
                else {
                    bc = Yb;
                    break
                }
            bc > Wb && (bc = Wb);
            y = c * e + (c - 1) * bc;
            v > y && (v = y);
            E = Xb;
            D = e + bc;
            o.period.x = w + t / 2;
            Ra = 0;
            n.changes.x = w - Math.round(160 / a);
            n.changes.y = r - Math.round(80 / a);
            n.changes.f = Math.round(206 / a);
            n.changes.d = Math.round(206 / a);
            o.change_ln1.x = n.changes.x + n.changes.f / 2;
            o.change_ln2.x = o.change_ln1.x;
            o.change_ln1.y = n.changes.y + Math.round(0.55 * n.changes.d);
            o.change_ln2.y = o.change_ln1.y + Math.round(22 / a);
            yb && (n.arrow_left.x = w - 87,
            n.arrow_left.y = r + v / 2,
            n.arrow_right.x = w + t + 20,
            n.arrow_right.y = n.arrow_left.y,
            o.prev_week_ln1.x = w - 110,
            o.prev_week_ln1.y = n.arrow_left.y - 30,
            o.prev_week_ln2.x = w - 110,
            o.prev_week_ln2.y = n.arrow_left.y - 10,
            o.next_week_ln1.x = n.arrow_right.x,
            o.next_week_ln1.y = n.arrow_right.y - 30,
            o.next_week_ln2.x = n.arrow_right.x,
            o.next_week_ln2.y = n.arrow_right.y - 10);
            oa(g)
        },
        j: function(a, c) {
            var b = wa();
            qa(a, c);
            o.title.caption = b;
            xa(a);
            La(a, c)
        },
        k: function(a) {
            a.textBaseline = "top";
            a.shadowOffsetX = 0;
            a.shadowOffsetY = 0;
            var c, b = 0, e = 0, h, j, s, u, O, R, Y, ba, M, va, J, Aa, ca = Zb + $b * ac;
            dat = new Date(S);
            cc = [];
            for (var ha = 1; ha <= NIKA.WEEKDAYNUM; ha++) {
                c = zb(dat);
                Aa = g;
                cc[ha] = g;
                a.drawImage(dc, b, e, dc.width, ca);
                a.drawImage(ec, b + 4, e, Xb, ca);
                a.font = "bold 18px Arial";
                a.textAlign = "center";
                a.fillStyle = Ia;
                a.fillText(NIKA.DAY_NAMES[ha - 1], b + Xb / 2, e + 18);
                a.font = "normal 14px Arial, sans-serif";
                a.fillStyle = Ma;
                a.fillText("(" + dat.getDate() + " " + NIKA.MONTHS2[dat.getMonth()] + ")", b + Xb / 2, e + 40);
                h = 60;
                a.textAlign = "left";
                R = g;
                Y = i;
                J = 1 == fc;
                for (var Q = gc; Q <= NIKA.LESSONSINDAY; Q++) {
                    var pa = ha.toString() + Db(Q);
                    u = s = j = "";
                    va = M = ba = i;
                    if (window.NIKA.CLASS_EXCHANGE && window.NIKA.CLASS_EXCHANGE[A] && window.NIKA.CLASS_EXCHANGE[A][T(dat)] && window.NIKA.CLASS_EXCHANGE[A][T(dat)][Q])
                        if (ba = g,
                        M = "F" == NIKA.CLASS_EXCHANGE[A][T(dat)][Q].s[0])
                            Cb || (j = NIKA.LESSON_CANCELED_STR);
                        else
                            for (var Xa in NIKA.CLASS_EXCHANGE[A][T(dat)][Q].s)
                                if (Subj = NIKA.SUBJECTS[NIKA.CLASS_EXCHANGE[A][T(dat)][Q].s[Xa]],
                                Subj || (Subj = NIKA.LESSON_CANCELED_STR),
                                Subj != s && (j && (j += "/"),
                                j += Subj,
                                s = Subj),
                                NIKA.USEROOMS && window.NIKA.CLASS_EXCHANGE[A][T(dat)][Q].r)
                                    u && (u += ","),
                                    O = NIKA.ROOMS[NIKA.CLASS_EXCHANGE[A][T(dat)][Q].r[Xa]],
                                    O || (O = NIKA.NO_STR),
                                    u += O;
                    if (!ba || M && Cb)
                        for (u = s = j = ""; ; )
                            if (window.NIKA.CLASS_SCHEDULE[c] && window.NIKA.CLASS_SCHEDULE[c][A] && window.NIKA.CLASS_SCHEDULE[c][A][pa]) {
                                for (Xa in NIKA.CLASS_SCHEDULE[c][A][pa].s)
                                    if ((Subj = NIKA.SUBJECTS[NIKA.CLASS_SCHEDULE[c][A][pa].s[Xa]]) || (Subj = "(" + NIKA.NO_LESSONS_STR + ")"),
                                    Subj != s && (j && (j += "/"),
                                    j += Subj,
                                    s = Subj),
                                    NIKA.USEROOMS && window.NIKA.CLASS_SCHEDULE[c][A][pa].r)
                                        u && (u += ","),
                                        O = NIKA.ROOMS[NIKA.CLASS_SCHEDULE[c][A][pa].r[Xa]],
                                        O || (O = NIKA.NO_STR),
                                        u += O;
                                1 == NIKA.CLASS_SCHEDULE[c][A][pa].s.length && "u" == NIKA.CLASS_SCHEDULE[c][A][pa].s[Xa][0] && (va = g);
                                break
                            } else if (0 < CurrWeekNum && 3 == pa.length)
                                pa = CurrWeekNum.toString() + pa;
                            else
                                break;
                    u && j && (j = -1 == u.indexOf("(") ? j + " (" + u + ")" : j + "  " + u);
                    j ? (Aa && (a.fillStyle = Ib,
                    a.strokeStyle = Ib,
                    a.font = "underline 12px Arial, sans-serif",
                    a.fillText(NIKA.LESSON_TIMES[Q][0], b + hc, e + h - 1),
                    a.fillRect(b + hc, e + h + 12, a.measureText(NIKA.LESSON_TIMES[Q][0]).width, 1),
                    h += ac - 14,
                    Aa = i),
                    s = Q,
                    asterisk = i,
                    1 < fc && !J && (Q < fc ? J = g : (s = Q - fc + 1,
                    asterisk = g)),
                    a.fillStyle = Ab && ba && (!M || M && !Cb) ? Bb : M ? Ib : va ? ic : Ia,
                    a.font = "normal 16px Arial, sans-serif",
                    NIKA.SECOND_RELATIVE ? a.fillText(s + ".", b + hc, e + h + 5) : a.fillText(Q + ".", b + hc, e + h + 5),
                    font_height = 14,
                    a.measureText(j).width > Xb - 64 && (a.font = "normal 14px Arial, sans-serif",
                    font_height = 14),
                    a.measureText(j).width > Xb - 64 && (a.font = "normal 12px Arial, sans-serif",
                    font_height = 10),
                    a.measureText(j).width > Xb - 64 && (a.font = "normal 10px Arial, sans-serif",
                    font_height = 8),
                    a.measureText(j).width > Xb - 64 ? (j = j.split(" (", 2),
                    a.fillText(j[0], b + hc + 22, e + h - 1),
                    a.fillText("(" + j[1], b + hc + 22, e + h + 12),
                    M && Cb && (a.strokeStyle = Ib,
                    a.fillRect(b + hc + 22, e + h + 4, a.measureText(j[0]).width, 1),
                    a.fillRect(b + hc + 22, e + h + 17, a.measureText(j[1]).width, 1))) : (a.fillText(j, b + hc + 22, e + h + 5),
                    M && Cb && (a.strokeStyle = Ib,
                    a.fillRect(b + hc + 22, e + h + font_height, a.measureText(j).width, 1))),
                    asterisk && (a.font = "bold 16px Arial",
                    a.fillStyle = Oa,
                    NIKA.SECOND_RELATIVE ? a.fillText("*", b + hc + a.measureText(s).width, e + h + 5) : a.fillText("*", b + hc + a.measureText(Q).width, e + h + 5)),
                    h += ac,
                    R = i,
                    Y = g) : (R || (h += ac),
                    R = g)
                }
                Y ? N == ha ? a.drawImage(jc, b + 16, e + 16) : a.drawImage(kc, b + 16, e + 16) : (cc[ha] = i,
                a.textAlign = "center",
                a.fillStyle = Ib,
                a.font = "bold 16px Arial",
                a.fillText(NIKA.NO_LESSONS_STR, b + Xb / 2, e + 75),
                a.textAlign = "left");
                b += Xb + Vb;
                0 == ha % Ub && (e += bc + ca,
                b = 0);
                dat.setDate(dat.getDate() + 1)
            }
        },
        h: function(a) {
            for (var c = 0, b = 0, e = Zb + $b * ac, h = 1; h <= NIKA.WEEKDAYNUM; h++) {
                if (a.x >= c && a.x < c + Xb && a.y >= b && a.y < b + e - 6)
                    return h;
                c += Xb + Vb;
                0 == h % Ub && (b += bc + e,
                c = 0)
            }
            return -1
        },
        p: function() {
            Tb(-7);
            window.onresize()
        },
        o: function() {
            Tb(7);
            window.onresize()
        },
        n: function() {
            -1 != N && cc[N] && (U = new Date(S),
            U.setDate(U.getDate() + N - 1),
            kb("classday"))
        },
        w: function() {
            kb("classcalendar")
        }
    },
    classcalendar: {
        i: "classched",
        l: function() {
            ea();
            o.period.a = g;
            Ob(0);
            o.prev_month_ln1.a = g;
            o.prev_month_ln2.a = g;
            o.next_month_ln1.a = g;
            o.next_month_ln2.a = g
        },
        m: function(a) {
            ga(a, g);
            o.period.x = w + t / 2;
            n.arrow_left.x = w - 87;
            n.arrow_left.y = r + v / 2;
            n.arrow_right.x = w + t + 20;
            n.arrow_right.y = n.arrow_left.y;
            o.prev_month_ln1.x = w - 110;
            o.prev_month_ln1.y = n.arrow_left.y - 30;
            o.prev_month_ln2.x = w - 110;
            o.prev_month_ln2.y = n.arrow_left.y - 10;
            o.next_month_ln1.x = n.arrow_right.x;
            o.next_month_ln1.y = n.arrow_right.y - 30;
            o.next_month_ln2.x = n.arrow_right.x;
            o.next_month_ln2.y = n.arrow_right.y - 10;
            oa(g)
        },
        j: function(a, c) {
            qa(a, c);
            xa(a);
            La(a, c)
        },
        k: function(a) {
            Pb(a, function(a) {
                return window.NIKA.CLASS_EXCHANGE && window.NIKA.CLASS_EXCHANGE[A] && window.NIKA.CLASS_EXCHANGE[A][T(a)] ? g : i
            })
        },
        h: function(a) {
            for (var c, b = Qb.getMonth(), e = e = new Date(Qb.getFullYear(),Qb.getMonth(),1), h = Math.round(Rb * t / ma); e.getMonth() == b; ) {
                c = (c = e.getDay()) ? c : 7;
                if (a.y >= h && a.y <= h + Math.round(Sb * t / ma))
                    return e;
                7 == c && (h += Math.round(Sb * t / ma));
                e.setDate(e.getDate() + 1)
            }
            return -1
        },
        n: function() {
            -1 != N && (jb(N),
            kb("classched"))
        },
        p: function() {
            Ob(-1)
        },
        o: function() {
            Ob(1)
        }
    },
    classday: {
        i: "classched",
        l: function() {
            ea();
            o.period.a = i;
            lc(0)
        },
        m: function(a) {
            ga(a, i);
            r = ja + 124;
            t = Math.round(q.width - 280);
            t > mc && (t = mc);
            v = q.height - r - ka - 30;
            w = q.width / 2 - t / 2;
            E = 1;
            D = nc;
            Ra = 12;
            x = t;
            y = 0;
            if (-1 == V)
                y += nc;
            else
                for (a = V; a <= oc; a++)
                    y += nc;
            v > y && (v = y);
            n.arrow_left.x = w - 87;
            n.arrow_left.y = r + v / 2;
            n.arrow_right.x = w + t + 20;
            n.arrow_right.y = n.arrow_left.y;
            o.prev_month_ln1.x = w - 110;
            o.prev_month_ln1.y = n.arrow_left.y - 30;
            o.prev_day_ln2.x = w - 110;
            o.prev_day_ln2.y = n.arrow_left.y - 10;
            o.next_month_ln1.x = n.arrow_right.x;
            o.next_month_ln1.y = n.arrow_right.y - 30;
            o.next_day_ln2.x = n.arrow_right.x;
            o.next_day_ln2.y = n.arrow_right.y - 10;
            oa(g)
        },
        j: function(a, c) {
            var b = U.getDay()
              , b = ("" + (NIKA.DAY_NAMES[(b ? b : 7) - 1] + ", " + U.getDate() + " " + NIKA.MONTHS2[U.getMonth()])).toLowerCase()
              , b = b.charAt(0).toUpperCase() + b.slice(1);
            qa(a, c);
            CurrWeekNum && (b += " (",
            1 == CurrWeekNum && (b += NIKA.FIRSTWEEK_STR),
            2 == CurrWeekNum && (b += NIKA.SECONDWEEK_STR),
            b += ")");
            o.title.caption = b;
            xa(a);
            La(a, c)
        },
        k: function(a) {
            a.textBaseline = "alphabetic";
            var c = zb(U), b, e, h, j, s, u, O, R, Y, ba, M, va, J = 130 + 12 * pc, Aa = t - 12 * qc - 20;
            M = [];
            var ca = []
              , ha = []
              , Q = []
              , pa = U.getDay()
              , pa = pa ? pa : 7;
            b = 0;
            if (-1 == V)
                a.fillStyle = Ib,
                a.font = "normal 24px Arial, sans-serif",
                a.textAlign = "center",
                a.fillText(NIKA.NO_LESSONS_STR, t / 2, b + 30);
            else
                for (var Xa = 1 == fc, Z = V; Z <= oc; Z++) {
                    Z & 1 && (a.fillStyle = rc,
                    a.fillRect(0, b, x, nc));
                    e = pa.toString() + Db(Z);
                    s = u = exch = i;
                    M = [];
                    ca = [];
                    ha = [];
                    Q = [];
                    if (window.NIKA.CLASS_EXCHANGE && window.NIKA.CLASS_EXCHANGE[A] && window.NIKA.CLASS_EXCHANGE[A][T(U)] && window.NIKA.CLASS_EXCHANGE[A][T(U)][Z])
                        if (exch = g,
                        u = "F" == NIKA.CLASS_EXCHANGE[A][T(U)][Z].s[0])
                            Cb || ca.push(NIKA.LESSON_CANCELED_STR);
                        else {
                            for (var K in NIKA.CLASS_EXCHANGE[A][T(U)][Z].s)
                                h = NIKA.SUBJECTS[NIKA.CLASS_EXCHANGE[A][T(U)][Z].s[K]],
                                j = "",
                                !h || h == f ? h = NIKA.LESSON_CANCELED_STR : NIKA.USEROOMS && window.NIKA.CLASS_EXCHANGE[A][T(U)][Z].r && (j = NIKA.ROOMS[NIKA.CLASS_EXCHANGE[A][T(U)][Z].r[K]],
                                j == f && (j = NIKA.NO_STR)),
                                ca.push(h),
                                Q.push(j);
                            if (window.NIKA.CLASS_EXCHANGE[A][T(U)][Z].g)
                                for (K in NIKA.CLASS_EXCHANGE[A][T(U)][Z].g)
                                    h = NIKA.CLASSGROUPS[NIKA.CLASS_EXCHANGE[A][T(U)][Z].g[K]],
                                    h == f && (h = ""),
                                    M.push(h);
                            if (window.NIKA.CLASS_EXCHANGE[A][T(U)][Z].t)
                                for (K in NIKA.CLASS_EXCHANGE[A][T(U)][Z].t)
                                    h = NIKA.TEACHERS[NIKA.CLASS_EXCHANGE[A][T(U)][Z].t[K]],
                                    h == f && (h = ""),
                                    ha.push(h)
                        }
                    if (!exch || u && Cb) {
                        M = [];
                        ca = [];
                        ha = [];
                        for (Q = []; ; )
                            if (window.NIKA.CLASS_SCHEDULE[c] && window.NIKA.CLASS_SCHEDULE[c][A] && window.NIKA.CLASS_SCHEDULE[c][A][e]) {
                                for (K in window.NIKA.CLASS_SCHEDULE[c][A][e].s)
                                    h = NIKA.SUBJECTS[NIKA.CLASS_SCHEDULE[c][A][e].s[K]],
                                    j = "",
                                    !h || h == f ? h = NIKA.NO_LESSONS_STR : (NIKA.USEROOMS && window.NIKA.CLASS_SCHEDULE[c][A][e].r && (j = NIKA.ROOMS[NIKA.CLASS_SCHEDULE[c][A][e].r[K]]),
                                    j == f && (j = NIKA.NO_STR)),
                                    ca.push(h),
                                    Q.push(j);
                                1 == NIKA.CLASS_SCHEDULE[c][A][e].s.length && "u" == NIKA.CLASS_SCHEDULE[c][A][e].s[K][0] && (s = g);
                                if (window.NIKA.CLASS_SCHEDULE[c][A][e].g)
                                    for (K in NIKA.CLASS_SCHEDULE[c][A][e].g)
                                        h = NIKA.CLASSGROUPS[NIKA.CLASS_SCHEDULE[c][A][e].g[K]],
                                        h == f && (h = ""),
                                        M.push(h);
                                if (window.NIKA.CLASS_SCHEDULE[c][A][e].t)
                                    for (K in NIKA.CLASS_SCHEDULE[c][A][e].t)
                                        h = NIKA.TEACHERS[NIKA.CLASS_SCHEDULE[c][A][e].t[K]],
                                        h == f && (h = ""),
                                        ha.push(h);
                                break
                            } else if (0 < CurrWeekNum && 3 == e.length)
                                e = CurrWeekNum.toString() + e;
                            else
                                break
                    }
                    e = Z;
                    h = i;
                    1 < fc && !Xa && (Z < fc ? Xa = g : (e = Z - fc + 1,
                    h = g));
                    a.fillStyle = Ia;
                    a.font = "bold 18px Arial, sans-serif";
                    a.textAlign = "center";
                    e = NIKA.SECOND_RELATIVE ? e + " " + NIKA.LESSON_STR : Z + " " + NIKA.LESSON_STR;
                    a.fillText(e, 55, b + 30);
                    a.fillStyle = Ib;
                    a.font = "normal 16px Arial, sans-serif";
                    a.fillText(NIKA.LESSON_TIMES[Z][0] + " - " + NIKA.LESSON_TIMES[Z][1], 55, b + 60);
                    h && (a.textAlign = "left",
                    a.font = "bold 18px Arial, sans-serif",
                    a.fillStyle = Oa,
                    a.fillText("*", 60 + Math.round(a.measureText(e).width / 2), b + 30));
                    switch (ca.length) {
                    case 0:
                        a.fillStyle = Ib;
                        a.font = "normal 22px Arial, sans-serif";
                        a.textAlign = "left";
                        a.fillText(NIKA.NO_LESSONS_STR, 120, b + 20);
                        Y = 0;
                        ba = b + 35;
                        break;
                    case 1:
                        O = "22px Arial, sans-serif";
                        R = "16px Arial, sans-serif";
                        Y = 1;
                        ba = b + 41;
                        break;
                    case 2:
                        O = "18px Arial, sans-serif";
                        R = "16px Arial, sans-serif";
                        Y = 30;
                        ba = b + 29;
                        break;
                    case 3:
                        R = O = "16px Arial, sans-serif";
                        Y = 22;
                        ba = b + 19;
                        break;
                    case 4:
                        R = O = "14px Arial, sans-serif",
                        Y = 16,
                        ba = b + 15
                    }
                    a.textAlign = "left";
                    a.textBaseline = "top";
                    j = 0;
                    e = ba;
                    if (0 < M.length) {
                        a.font = "italic " + O;
                        a.fillStyle = u && Cb ? Ib : Ab && exch ? Bb : Ia;
                        for (K in M)
                            j = Math.max(a.measureText(M[K]).width, j),
                            a.fillText(M[K] + ":", 130, e),
                            e += Y;
                        j += 10
                    }
                    e = ba;
                    M = 0;
                    if (0 < ca.length) {
                        a.font = "normal " + O;
                        a.fillStyle = u && Cb ? Ib : Ab && exch ? Bb : s ? ic : Ia;
                        for (K in ca)
                            a.measureText(ca[K]).width > M && (M = a.measureText(ca[K]).width),
                            a.fillText(ca[K], 130 + j, e),
                            e += Y;
                        M += 10
                    }
                    e = ba;
                    va = 0;
                    if (0 < ha.length)
                        for (K in a.font = "bold " + R,
                        a.fillStyle = u && Cb ? Ib : Ab && exch ? Bb : sc,
                        ha) {
                            for (h = ha[K]; J + a.measureText(h).width > Aa - 10 && 3 < h.length; )
                                h = h.substr(0, h.length - 5) + "...";
                            a.fillText(h, J, e);
                            va = Math.max(a.measureText(h).width, va);
                            e += Y
                        }
                    e = ba;
                    h = 0;
                    if (0 < Q.length)
                        for (K in a.font = "normal " + O,
                        a.fillStyle = u && Cb ? Ib : Ab && exch ? Bb : s ? ic : Ia,
                        Q)
                            a.fillText(Q[K], Aa, e),
                            h = Math.max(a.measureText(Q[K]).width, h),
                            e += Y;
                    if (u && Cb)
                        for (K in e = ba,
                        ca)
                            a.beginPath(),
                            a.strokeStyle = Ib,
                            a.moveTo(130, e + 10),
                            a.lineTo(130 + j + M, e + 10),
                            ha.length > K && "" != ha[K] && (a.moveTo(J, e + 10),
                            a.lineTo(J + va, e + 10)),
                            Q.length > K && "" != Q[K] && (a.moveTo(Aa, e + 10),
                            a.lineTo(Aa + h, e + 10)),
                            a.closePath(),
                            a.stroke(),
                            e += Y;
                    a.beginPath();
                    a.lineWidth = 2;
                    a.strokeStyle = tc;
                    a.moveTo(12, b);
                    a.lineTo(mc - 20, b);
                    a.closePath();
                    a.stroke();
                    b += nc
                }
        },
        h: function() {
            return -1
        },
        p: function() {
            if (yb || 1 != U.getDay())
                lc(-1),
                window.onresize()
        },
        o: function() {
            if (yb || U.getDay() != NIKA.WEEKDAYNUM)
                lc(1),
                window.onresize()
        }
    }
};
function $a(a) {
    if (window.NIKA.CLASS_COURSES)
        return Number(NIKA.CLASS_COURSES[a]);
    for (var c = new String, a = NIKA.CLASSES[a], b = 0; b < a.length; b++)
        "0123456789".indexOf(a.charAt(b)) + 1 && (c += a.charAt(b));
    return Number(c)
}
function eb(a) {
    var c = L, b = L, e = -1, h, j;
    for (j in da)
        cls = da[j],
        h = $a(cls),
        e != h && -1 != e ? (e = h,
        NIKA.VERTICAL_CLASSES == f || !NIKA.VERTICAL_CLASSES ? (c += db,
        b = L) : (c = L,
        b += ab)) : -1 == e && (e = h),
        a(c, b, cls),
        NIKA.VERTICAL_CLASSES == f || !NIKA.VERTICAL_CLASSES ? b += ab : c += db
}
function rb(a) {
    var c = L, b = L, e = 0, h;
    for (h in aa)
        teach = aa[h],
        e++,
        e > pb && (e = 1,
        c = L,
        b += lb),
        a(c, b, teach),
        c += qb
}
function jb(a) {
    S = new Date(a);
    for (S.setHours(0, 0, 0, 0); 1 < S.getDay(); )
        S.setDate(S.getDate() - 1);
    for (; 1 > S.getDay(); )
        S.setDate(S.getDate() + 1)
}
function uc(a) {
    CurrWeekNum = window.NIKA.DUALWEEK && -1 != a && window.NIKA.PERIODS[a] && window.NIKA.PERIODS[a].fwm ? (parseInt(Math.abs((S - new Date(Number(NIKA.PERIODS[a].fwm.substr(6, 4)),Number(NIKA.PERIODS[a].fwm.substr(3, 2)) - 1,Number(NIKA.PERIODS[a].fwm.substr(0, 2)))) / 864E5).toFixed(0) / 7) & 1) + 1 : 0
}
function ub(a) {
    function c(a) {
        var e = Object.keys(window.NIKA.TEACH_EXCHANGE[z]);
        for (k in e)
            if (vc(e[k]).getMonth() == a.getMonth())
                return a;
        return -1
    }
    a && (S.setDate(S.getDate() + a),
    wc = 5);
    n.arrow_left.a = yb;
    n.arrow_right.a = yb;
    o.prev_week_ln1.a = yb;
    o.prev_week_ln2.a = yb;
    o.next_week_ln1.a = yb;
    o.next_week_ln2.a = yb;
    n.changes.a = i;
    o.change_ln1.a = i;
    o.change_ln2.a = i;
    if (yb && window.NIKA.TEACH_EXCHANGE && window.NIKA.TEACH_EXCHANGE[z]) {
        var b = new Date(S);
        b.setDate(b.getDate() + 5);
        a = c(b);
        -1 == a && (a = c(S));
        -1 != a && (Qb = new Date(a.getFullYear(),a.getMonth(),1),
        n.changes.a = g,
        o.change_ln2.caption = "RUS" == la ? ("" + (NIKA.IN_STR == f ? "\u0432" : NIKA.IN_STR)).toLowerCase() + " " : ("" + (NIKA.IN_STR == f ? "in" : NIKA.IN_STR)).toLowerCase() + " ",
        o.change_ln2.caption = NIKA.MONTHS3 == f ? o.change_ln2.caption + ("" + xc[a.getMonth()]).toLowerCase() : o.change_ln2.caption + ("" + NIKA.MONTHS3[a.getMonth()]).toLowerCase(),
        o.change_ln1.a = g,
        o.change_ln2.a = g)
    }
    for (var a = zb(S), e = 1, b = new Date(S); -1 == a && 6 > e; )
        b.setDate(b.getDate() + 1),
        a = zb(b),
        e++;
    uc(a);
    -1 != a ? (b = NIKA.PERIOD_STR,
    "\u043d\u0430 " == b.substr(0, 3) && (b = b.substr(3, b.length)),
    o.period.caption = b + "   " + NIKA.PERIODS[a].name) : o.period.caption = "";
    Ja = "";
    if (window.NIKA.TEACH_SCHEDULE[a] && window.NIKA.TEACH_SCHEDULE[a][z])
        for (var h in NIKA.TEACH_SCHEDULE[a][z])
            if ("M" != NIKA.TEACH_SCHEDULE[a][z][h].s)
                if (Ja) {
                    if (Ja != NIKA.SUBJECTS[NIKA.TEACH_SCHEDULE[a][z][h].s]) {
                        Ja = "";
                        break
                    }
                } else
                    Ja = NIKA.SUBJECTS[NIKA.TEACH_SCHEDULE[a][z][h].s]
}
function Tb(a) {
    function c(a) {
        var e = Object.keys(window.NIKA.CLASS_EXCHANGE[A]);
        for (k in e)
            if (vc(e[k]).getMonth() == a.getMonth())
                return a;
        return -1
    }
    a && (S.setDate(S.getDate() + a),
    wc = 5);
    n.arrow_left.a = yb;
    n.arrow_right.a = yb;
    o.prev_week_ln1.a = yb;
    o.prev_week_ln2.a = yb;
    o.next_week_ln1.a = yb;
    o.next_week_ln2.a = yb;
    n.changes.a = i;
    o.change_ln1.a = i;
    o.change_ln2.a = i;
    yb && window.NIKA.CLASS_EXCHANGE && window.NIKA.CLASS_EXCHANGE[A] && (a = new Date(S),
    a.setDate(a.getDate() + 5),
    a = c(a),
    -1 == a && (a = c(S)),
    -1 != a && (Qb = new Date(a.getFullYear(),a.getMonth(),1),
    n.changes.a = g,
    o.change_ln2.caption = "RUS" == la ? ("" + (NIKA.IN_STR == f ? "\u0432" : NIKA.IN_STR)).toLowerCase() + " " : ("" + (NIKA.IN_STR == f ? "in" : NIKA.IN_STR)).toLowerCase() + " ",
    o.change_ln2.caption = NIKA.MONTHS3 == f ? o.change_ln2.caption + ("" + xc[a.getMonth()]).toLowerCase() : o.change_ln2.caption + ("" + NIKA.MONTHS3[a.getMonth()]).toLowerCase(),
    o.change_ln1.a = g,
    o.change_ln2.a = g));
    var b = zb(S), e, a = new Date(S);
    if (-1 == b) {
        for (e = 1; -1 == b && 6 > e; )
            a.setDate(a.getDate() + 1),
            b = zb(a),
            e++;
        a = new Date(S)
    }
    uc(b);
    -1 != b ? (e = NIKA.PERIOD_STR,
    "\u043d\u0430 " == e.substr(0, 3) && (e = e.substr(3, e.length)),
    o.period.caption = e + "   " + NIKA.PERIODS[b].name) : o.period.caption = "";
    $b = 1;
    var h = -1;
    gc = NIKA.LESSONSINDAY;
    for (var j = 1; j <= NIKA.WEEKDAYNUM; j++) {
        V = oc = -1;
        for (var s = NIKA.FIRSTLESSONNUM; s <= NIKA.LESSONSINDAY; s++)
            if (window.NIKA.CLASS_EXCHANGE && window.NIKA.CLASS_EXCHANGE[A] && window.NIKA.CLASS_EXCHANGE[A][T(a)] && window.NIKA.CLASS_EXCHANGE[A][T(a)][s] && "F" != window.NIKA.CLASS_EXCHANGE[A][T(a)][s].s[0]) {
                if (-1 == V || V > s)
                    V = s;
                if (-1 == oc || oc < s)
                    oc = s;
                $b = Math.max($b, oc - V + 1)
            } else
                for (e = j.toString() + Db(s); ; )
                    if (window.NIKA.CLASS_SCHEDULE[b] && window.NIKA.CLASS_SCHEDULE[b][A] && window.NIKA.CLASS_SCHEDULE[b][A][e]) {
                        if (-1 == V || V > s)
                            V = s;
                        if (-1 == oc || oc < s)
                            oc = s;
                        $b = Math.max($b, oc - V + 1);
                        break
                    } else if (0 < CurrWeekNum && 3 == e.length)
                        e = CurrWeekNum.toString() + e;
                    else
                        break;
        V < gc && -1 != V && (gc = V);
        oc > h && (h = oc);
        a.setDate(a.getDate() + 1);
        b = zb(a)
    }
    b = zb(S);
    fc = 1;
    window.NIKA.CLASS_SHIFT && window.NIKA.CLASS_SHIFT[b] && window.NIKA.CLASS_SHIFT[b][A] && (fc = window.NIKA.CLASS_SHIFT[b][A]);
    Na = "";
    1 < fc && (Na = "(*" + NIKA.SECOND_SHIFT_STR + ")")
}
function Ob(a) {
    n.arrow_left.a = g;
    n.arrow_right.a = g;
    o.period.caption = "RUS" == la ? ("" + (NIKA.CHANGES_STR == f ? "\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f" : NIKA.CHANGES_STR)).toLowerCase() + " " + ("" + (NIKA.IN_STR == f ? "\u0432" : NIKA.IN_STR)).toLowerCase() + " " + ("" + (NIKA.SCHEDULE2_STR == f ? "\u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0438" : NIKA.SCHEDULE2_STR)).toLowerCase() : ("" + (NIKA.CHANGES_STR == f ? "changes" : NIKA.CHANGES_STR)).toLowerCase() + " " + ("" + (NIKA.IN_STR == f ? "in" : NIKA.IN_STR)).toLowerCase() + " " + ("" + (NIKA.SCHEDULE2_STR == f ? "\u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0438" : NIKA.SCHEDULE2_STR)).toLowerCase();
    var c = Qb.getMonth() + a;
    if (a) {
        for (-1 == c ? c = 11 : 12 == c && (c = 0); Qb.getMonth() != c; )
            Qb.setDate(Qb.getDate() + 7 * a);
        wc = 5
    }
    o.title.caption = NIKA.MONTHS[c] + "  " + Qb.getFullYear();
    na = 2 * Rb + Sb;
    for (a = new Date(Qb.getFullYear(),Qb.getMonth(),1); a.getMonth() == c; )
        DayNum = (DayNum = a.getDay()) ? DayNum : 7,
        7 == DayNum && (na += Sb),
        a.setDate(a.getDate() + 1)
}
function lc(a) {
    n.arrow_left.a = g;
    n.arrow_right.a = g;
    o.prev_month_ln1.a = g;
    o.prev_day_ln2.a = g;
    o.next_month_ln1.a = g;
    o.next_day_ln2.a = g;
    a && (U.setDate(U.getDate() + a),
    wc = 5);
    jb(U);
    oc = V = -1;
    var a = zb(U), c, b = U.getDay();
    uc(a);
    o.period.caption = -1 != a ? NIKA.PERIOD_STR + "   " + NIKA.PERIODS[a].name : "";
    for (var b = b ? b : 7, e = NIKA.FIRSTLESSONNUM; e <= NIKA.LESSONSINDAY; e++)
        if (window.NIKA.CLASS_EXCHANGE && window.NIKA.CLASS_EXCHANGE[A] && window.NIKA.CLASS_EXCHANGE[A][T(U)] && window.NIKA.CLASS_EXCHANGE[A][T(U)][e]) {
            if (-1 == V || V > e)
                V = e;
            if (-1 == oc || oc < e)
                oc = e
        } else
            for (c = b.toString() + Db(e); ; )
                if (window.NIKA.CLASS_SCHEDULE[a] && window.NIKA.CLASS_SCHEDULE[a][A] && window.NIKA.CLASS_SCHEDULE[a][A][c]) {
                    if (-1 == V || V > e)
                        V = e;
                    if (-1 == oc || oc < e)
                        oc = e;
                    break
                } else if (0 < CurrWeekNum && 3 == c.length)
                    c = CurrWeekNum.toString() + c;
                else
                    break;
    fc = 1;
    window.NIKA.CLASS_SHIFT && window.NIKA.CLASS_SHIFT[a] && window.NIKA.CLASS_SHIFT[a][A] && (fc = window.NIKA.CLASS_SHIFT[a][A]);
    Na = "";
    1 < fc && (Na = "(*" + NIKA.SECOND_SHIFT_STR + ")")
}
function Db(a) {
    a = a.toString();
    2 > a.length && (a = "0" + a);
    return a
}
function T(a) {
    return Db(a.getDate()) + "." + Db(a.getMonth() + 1) + "." + a.getFullYear().toString()
}
function vc(a) {
    return new Date(a[6] + a[7] + a[8] + a[9],a[3] + a[4] - 1,a[0] + a[1])
}
function zb(a) {
    var c, b, e;
    for (e in NIKA.PERIODS)
        if (c = new Date(Number(NIKA.PERIODS[e].b.substr(6, 4)),Number(NIKA.PERIODS[e].b.substr(3, 2)) - 1,Number(NIKA.PERIODS[e].b.substr(0, 2))),
        b = new Date(Number(NIKA.PERIODS[e].e.substr(6, 4)),Number(NIKA.PERIODS[e].e.substr(3, 2)) - 1,Number(NIKA.PERIODS[e].e.substr(0, 2))),
        a >= c && a <= b)
            return e;
    return -1
}
function Pb(a, c) {
    var b = Qb.getMonth();
    a.save();
    a.scale(t / ma, t / ma);
    a.fillStyle = "#FFFFFF";
    a.fillRect(0, 0, ma, na);
    a.fillStyle = yc;
    a.fillRect(0, 0, ma, Rb);
    a.fillRect(0, na - Rb, ma, Rb);
    a.font = "bold 24px Arial";
    a.textAlign = "center";
    a.textBaseline = "alphabetic";
    a.strokeStyle = yc;
    a.fillStyle = Ia;
    for (DayNum = 0; 7 >= DayNum; DayNum++)
        DayNum && a.fillText(NIKA.DAY_NAMESH[DayNum - 1], DayNum * zc - zc / 2, Rb / 2 + 12),
        a.beginPath(),
        a.moveTo(DayNum * zc, Rb),
        a.lineTo(DayNum * zc, na - Rb),
        a.closePath(),
        a.stroke();
    a.font = "100 54px Arial, sans-serif";
    dat = new Date(Qb.getFullYear(),Qb.getMonth(),1);
    for (var e = Rb, h; dat.getMonth() == b; )
        DayNum = (DayNum = dat.getDay()) ? DayNum : 7,
        h = (DayNum - 1) * zc,
        c(dat) ? (a.fillStyle = Ac,
        a.fillRect(h, e, zc - 1, Sb - 1),
        a.fillStyle = "#FFFFFF") : 6 > DayNum ? a.fillStyle = Ia : (a.fillStyle = Bc,
        a.fillRect(h, e, zc - 1, Sb - 1),
        a.fillStyle = Cc),
        a.fillText(dat.getDate(), h + zc / 2, e + Sb / 2 + 20),
        7 == DayNum && (e += Sb,
        a.beginPath(),
        a.moveTo(0, e),
        a.lineTo(ma, e),
        a.closePath(),
        a.stroke()),
        dat.setDate(dat.getDate() + 1);
    a.restore()
}
;var q, W = "", S, yb, n = [], o = [], w = 0, r = 0, t = 0, v = 0, Cb = g, Ab = g, la = "RUS", Va = 304, Wa = 125, ya = "", za = "", Ba = "", Ca = "", Da = "", Ea = " ", Fa = "", Ga = "", ia = 0, Dc = 5, x, y, E, D, m, l, C, Qa, Ec, X, Fc, Gc, wc, Ra = 0, Hc = g, L = 30, Ic = "rgba(255,255,255,255)", Jc = "rgba(255,255,255,0)", ja = 140, ka = 80, Kc = "", N = -1, Lc = 60, Mc = 600, Nc = 120, Oc = 0, Pc = 0, Qc = i, Rc = 0, Sc = 20, Tc = i, Uc, Vc = i, sa = "#42825e", fa = "#CCFADD", fb = "#3CACC4", Ka = "#F9FCC3", Mb = "#838383", Kb = "#CDF7E3", Lb = "#BCEAD0", Eb = "#E6F3C7", Fb = "#FDFDC7", Gb = "#EDBE90", Hb = "#FDC690", Bb = "#FB3602", Nb = "#FF3004", yc = "#CACACA", Bc = "#FEFECA", Cc = "#FE7446", Ac = "#FF3004", rc = "rgba(127,239,164,0.18)", tc = "#C6EBD4", sc = "#44825D", gb = "#D9E4FF,#FEFCB1,#E4C8FB,#C7FBD4,#FCC2EA,#DCFEB1,#C0F6F8,#FCC9C8,#E1ECA7,#FBDFB7,#F6FFAE,#DBE0E3,#C6EAFF".split(","), xc = "\u044f\u043d\u0432\u0430\u0440\u0435,\u0444\u0435\u0432\u0440\u0430\u043b\u0435,\u043c\u0430\u0440\u0442\u0435,\u0430\u043f\u0440\u0435\u043b\u0435,\u043c\u0430\u0435,\u0438\u044e\u043d\u0435,\u0438\u044e\u043b\u0435,\u0430\u0432\u0433\u0443\u0441\u0442\u0435,\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0435,\u043e\u043a\u0442\u044f\u0431\u0440\u0435,\u043d\u043e\u044f\u0431\u0440\u0435,\u0434\u0435\u043a\u0430\u0431\u0440\u0435".split(","), Ia = "#000000", ib = fa, Wc = "rgb(170,40,30)", Ma = "rgb(40,40,40)", Ib = "rgb(100,100,100)", Oa = "#306030", ic = "rgb(0,137,198)", $ = "images/", Xc = window.location.host.toLowerCase();
"raspisanie.nikasoft.ru" == Xc && ($ = "/static/images/");
"localhost" == Xc && ($ = "/static/images/");
var Sa = new Image;
Sa.src = $ + "background1.jpg";
var ra = new Image;
ra.src = $ + "grid.png";
var Ta = new Image;
Ta.src = $ + "calendar1.png";
var Ua = new Image
  , ta = new Image;
ta.src = $ + "top_line.png";
var ua = new Image;
ua.src = $ + "bottom_line.png";
var kc = new Image;
kc.src = $ + "cs_day.png";
var jc = new Image;
jc.src = $ + "cs_day_hl.png";
var hb = [new Image, new Image, new Image, new Image];
hb[0].src = $ + "class_btn1.png";
hb[1].src = $ + "class_btn2.png";
hb[2].src = $ + "class_btn3.png";
hb[3].src = $ + "class_btn4.png";
var ec = new Image;
ec.src = $ + "day_box.png";
var dc = new Image;
dc.src = $ + "day_line.png";
for (var Yc, pc = 18, qc = 3, db, ab = 76, cb, bb = 51, Ya, qb, lb = 54, ob, nb = 51, mb, pb, Pa, tb = [new Image, new Image, new Image, new Image], sb = [new Image, new Image, new Image, new Image], Za = 1; 4 >= Za; Za++)
    tb[Za - 1].src = $ + "teach_btn" + ("" + Za) + ".png",
    sb[Za - 1].src = $ + "teach_btnHL" + ("" + Za) + ".png";
var Qb = -1, vb = 100, wb = 45, P = 128, xb = 70, Jb, z, Ja, Xb = 264, Vb, bc, Ub, Wb = 100, Yb = 10, ac = 27, hc = 20, Zb = 96, $b, gc, A, Na, cc = [], U, mc = 800, nc = 82, V, oc, fc, Rb = 50, ma = 875, zc = 125, Sb = 80, na, Zc;
function p(a) {
    return document.getElementById(a)
}
function $c(a, c, b, e, h) {
    n[a] = {
        x: 0,
        y: 0,
        f: c,
        d: b,
        a: i,
        u: null,
        v: null
    };
    n[a].u = new Image;
    n[a].u.src = $ + e;
    n[a].v = new Image;
    n[a].v.src = $ + h
}
function ad(a, c, b, e, h) {
    o[a] = {
        x: 0,
        y: 0,
        a: i,
        caption: c,
        font: b,
        color: e,
        align: h,
        q: i
    }
}
function bd(a) {
    a === f && (a = window.event);
    return a.offsetX || 0 == a.offsetX ? {
        x: a.offsetX,
        y: a.offsetY
    } : {
        x: a.pageX - a.target.offsetLeft,
        y: a.pageY - a.target.offsetTop
    }
}
function cd(a) {
    return a.x >= w && a.x <= w + t && a.y >= r && a.y <= r + v
}
function dd(a) {
    for (btn in n)
        if (n[btn].a && a.x >= n[btn].x && a.x <= n[btn].x + n[btn].f && a.y >= n[btn].y && a.y <= n[btn].y + n[btn].d)
            return btn;
    return -1
}
function ed(a) {
    40 < a.length && (a = a.substr(0, 39) + "...");
    return a
}
function fd() {
    var a = Sa.width / q.width
      , c = 1024 / q.height;
    ratio = c;
    a > c && (ratio = a);
    1.7 < ratio && (ratio = 1.7);
    1 > ratio && (ratio = 1);
    return ratio
}
function gd() {
    var a = new Date
      , c = NIKA.EXPORT_DATE;
    if (c != f) {
        if (a.getDate() == c.substr(0, 2) && a.getMonth() + 1 == c.substr(3, 2) && a.getFullYear() == c.substr(6, 4))
            return "" + (NIKA.TODAY_STR == f ? "\u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432" : NIKA.TODAY_STR) + " " + NIKA.EXPORT_TIME.substr(0, 5);
        a.setDate(a.getDate() - 1);
        return a.getDate() == c.substr(0, 2) && a.getMonth() + 1 == c.substr(3, 2) && a.getFullYear() == c.substr(6, 4) ? "" + (NIKA.YESTERDAY_STR == f ? "\u0432\u0447\u0435\u0440\u0430 \u0432" : NIKA.YESTERDAY_STR) + " " + NIKA.EXPORT_TIME.substr(0, 5) : NIKA.EXPORT_DATE + " " + NIKA.EXPORT_TIME.substr(0, 5)
    }
}
function hd() {
    Rc ? Rc-- : (window.clearInterval(Uc),
    Uc = f,
    Tc || (p("AddElements").style.display = "block"));
    Qc = g
}
function id(a) {
    if (Tc != a) {
        if (Tc = a)
            p("AddElements").style.display = "none",
            jd(i);
        Rc = Sc;
        Uc == f && (Uc = window.setInterval(hd, 30))
    }
}
function jd(a) {
    if (!(NIKA.TERM_VIDEO_SAVER_FILE == f || window.schedule_check_url != f) && Vc != a)
        a ? Tc || (Vc = a,
        p("AddElements").style.display = "none",
        q.style.display = "none",
        p("VideoScreenSaver") == f && (a = document.createElement("video"),
        a.id = "VideoScreenSaver",
        a.loop = "loop",
        a.autoplay = "autoplay",
        a.muted = "muted",
        a.style = "height: 100vh; width: 100%; object-fit: cover; position: absolute;",
        a.src = NIKA.TERM_VIDEO_SAVER_FILE,
        a.innerHTML = "<p>qwerqwer</p>",
        p("MainDiv").insertBefore(a, q),
        a.onmousedown = function() {
            location.href = location.href
        }
        ,
        Zc && a.addEventListener("touchstart", function() {
            location.href = location.href
        }))) : (Vc = a,
        p("AddElements").style.display = "block",
        q.style.display = "block",
        p("VideoScreenSaver") != f && (p("VideoScreenSaver").style.display = "none"))
}
window.Init = kd;
function kd() {
    function a(a) {
        switch (a) {
        case "LeftScrll":
        case "RightScrll":
        case "UpScrll":
        case "DownScrll":
            ld();
            break;
        case "home":
        case "classes":
        case "teachers":
            kb(a);
            break;
        case "back":
            kb(tabs[W].i);
            break;
        case "arrow_left":
        case "prev_month":
        case "prev_day":
            window.tabs[W].p && tabs[W].p();
            break;
        case "arrow_right":
        case "next_month":
        case "next_day":
            window.tabs[W].o && tabs[W].o();
            break;
        case "changes":
            window.tabs[W].w && tabs[W].w();
            break;
        case "NL":
        case "NLs":
            "1" != window.NIKA.DISABLE_LINK_LOGO && (location.href = "http://www.nikasoft.ru")
        }
    }
    NIKA.LANG != f && (la = NIKA.LANG);
    Ua.src = "RUS" == la ? $ + "title1.png" : $ + "title1_eng.png";
    "RUS" == la ? (NIKA.FOR_WEEK = NIKA.FOR_WEEK == f ? "\u043d\u0430 \u043d\u0435\u0434\u0435\u043b\u044e" : NIKA.FOR_WEEK,
    window.NIKA.DUALWEEK && (NIKA.FOR_1WEEK = NIKA.FOR_1WEEK == f ? "\u043d\u0430 I \u043d\u0435\u0434\u0435\u043b\u044e" : NIKA.FOR_1WEEK,
    NIKA.FOR_2WEEK = NIKA.FOR_2WEEK == f ? "\u043d\u0430 II \u043d\u0435\u0434\u0435\u043b\u044e" : NIKA.FOR_2WEEK)) : "ENG" == la && (NIKA.FOR_WEEK = NIKA.FOR_WEEK == f ? "weekly" : NIKA.FOR_WEEK,
    window.NIKA.DUALWEEK && (NIKA.FOR_1WEEK = NIKA.FOR_1WEEK == f ? "for odd week" : NIKA.FOR_1WEEK,
    NIKA.FOR_2WEEK = NIKA.FOR_2WEEK == f ? "for even week" : NIKA.FOR_2WEEK));
    p("go_mobile").onclick = function() {
        if (location.href.indexOf("Schedule.html") == -1) {
            var a = ""
              , a = new Date;
            a.setTime(a.getTime() + 31104E6);
            a = "; expires=" + a.toUTCString();
            document.cookie = "schedule_mobile=1" + a + "; path=/";
            location.href = location.href.replace(location.hash, "")
        } else
            location.href = location.href.replace("Schedule.html", "m.schedule.html")
    }
    ;
    q = p("MainCanvas");
    Zc = i;
    "ontouchstart"in window ? Zc = g : window.navigator.D && navigator.C && (Zc = g);
    q.onmousedown = function(a) {
        id(i);
        var b = bd(a);
        if (!Zc && cd(b)) {
            X = b;
            Fc = {
                x: m,
                y: l
            };
            Gc = i;
            HoldActive = g
        } else {
            b = dd(b);
            switch (b) {
            case "LeftScrll":
            case "RightScrll":
            case "UpScrll":
            case "DownScrll":
                md(b)
            }
        }
        q.onmousemove(a)
    }
    ;
    Zc && (q.addEventListener("touchstart", function(a) {
        id(i);
        var b = {
            x: a.changedTouches[0].pageX,
            y: a.changedTouches[0].pageY
        };
        if (cd(b)) {
            X = b;
            Fc = {
                x: m,
                y: l
            };
            Gc = i;
            HoldActive = g
        } else {
            N = dd(b);
            if (N != -1) {
                switch (N) {
                case "LeftScrll":
                case "RightScrll":
                case "UpScrll":
                case "DownScrll":
                    md(btn)
                }
                a.preventDefault();
                Qc = g
            }
        }
    }),
    q.addEventListener("touchmove", function(a) {
        var b = {
            x: a.changedTouches[0].pageX,
            y: a.changedTouches[0].pageY
        }
          , c = N;
        if (cd(b)) {
            if (HoldActive && x) {
                c = i;
                if (b.x < X.x && Fc.x + X.x - b.x + t < x + (E >> 1) && m + t < x || b.x > X.x && Fc.x + X.x - b.x > 0 && m > 0) {
                    Gc = c = g;
                    m = Fc.x + X.x - b.x
                }
                if (b.y < X.y && Fc.y + X.y - b.y + v < y + (D >> 1) && l + v < y || b.y > X.y && Fc.y + X.y - b.y > 0 && l > 0) {
                    Gc = c = g;
                    l = Fc.y + X.y - b.y
                }
                Qc = g;
                c && a.preventDefault()
            }
        } else {
            N = dd(b);
            N != c && (Qc = g)
        }
    }),
    q.addEventListener("touchend", function(b) {
        if (cd({
            x: b.changedTouches[0].pageX,
            y: b.changedTouches[0].pageY
        }) && Gc) {
            var c = E * (m / E >> 0);
            if (C.x = Math.round(10 * (m - c) / E)) {
                if (C.x >= 5) {
                    C.x = C.x - 10;
                    c = c + E
                }
                Qa.x = Math.round((c - m) / C.x)
            }
            c = D * (l / D >> 0);
            if (C.y = Math.round(10 * (l - c) / D)) {
                if (C.y >= 5) {
                    C.y = C.y - 10;
                    c = c + D
                }
                Qa.y = Math.round((c - l) / C.y)
            }
            HoldActive = Gc = i;
            Qc = g;
            b.preventDefault()
        } else if (N != -1) {
            a(N);
            N = f;
            Qc = g
        }
    }));
    q.onmousemove = function(a) {
        if (W) {
            a = bd(a);
            Oc = 0;
            var b = N;
            if (cd(a)) {
                if (HoldActive && x && (Math.abs(a.x - X.x) > 10 || Math.abs(a.y - X.y) > 10))
                    if (Hc && !Zc)
                        Gc = g;
                    else
                        return;
                if (Gc) {
                    if (a.x < X.x && Fc.x + X.x - a.x + t < x + (E >> 1) && m + t < x || a.x > X.x && Fc.x + X.x - a.x > 0 && m > 0)
                        m = Fc.x + X.x - a.x;
                    if (a.y < X.y && Fc.y + X.y - a.y + v < y + (D >> 1) && l + v < y || a.y > X.y && Fc.y + X.y - a.y > 0 && l > 0)
                        l = Fc.y + X.y - a.y;
                    Qc = g;
                    return
                }
                if (C.x || C.y || wc)
                    return;
                a.x = a.x - (w - m);
                a.y = a.y - (r - l);
                N = tabs[W].h(a)
            } else
                N = dd(a);
            N != b && (Qc = g)
        }
    }
    ;
    q.onmouseup = function(b) {
        if (W) {
            Qc = g;
            b = bd(b);
            if (cd(b))
                if (Gc && !Zc) {
                    b = E * (m / E >> 0);
                    if (C.x = Math.round(10 * (m - b) / E)) {
                        if (C.x >= 5) {
                            C.x = C.x - 10;
                            b = b + E
                        }
                        Qa.x = Math.round((b - m) / C.x)
                    }
                    b = D * (l / D >> 0);
                    if (C.y = Math.round(10 * (l - b) / D)) {
                        if (C.y >= 5) {
                            C.y = C.y - 10;
                            b = b + D
                        }
                        Qa.y = Math.round((b - l) / C.y)
                    }
                } else {
                    if (C.x || C.y || wc)
                        return;
                    b.x = b.x - (w - m);
                    b.y = b.y - (r - l);
                    N = tabs[W].h(b);
                    window.tabs[W].n && tabs[W].n()
                }
            else
                a(dd(b));
            HoldActive = Gc = i
        }
    }
    ;
    q.onmouseout = function() {
        Qc = g;
        N = -1;
        HoldActive = Gc = i
    }
    ;
    window.onresize = function() {
        q.width = p("MainDiv").clientWidth;
        q.height = p("MainDiv").clientHeight;
        p("go_mobile").style.left = (q.width - 180).toString() + "px";
        p("go_mobile").style.top = (q.height - 40).toString() + "px";
        p("go_mobile").style.visibility = window.NIKA.MOBILE_LINK == "hidden" ? "hidden" : window.NIKA.MOBILE_LINK == "visible" && W == "home" ? "visible" : W == "home" && screen.availWidth / (window.devicePixelRatio || 1) < 1800 && screen.availHeight / (window.devicePixelRatio || 1) < 1800 ? "visible" : "hidden";
        if (W) {
            var a = fd();
            tabs[W].m(a);
            n.back.f = 67;
            n.back.d = 68;
            n.home.f = n.back.f;
            n.home.d = n.back.d;
            n.back.x = q.width - 2 * n.back.f - 120;
            n.back.y = q.height - ka / 2 - n.back.d / 2;
            n.home.x = n.back.x + n.back.f + 20;
            n.home.y = n.back.y;
            nd();
            q.style.cursor = Zc && window.screen.width == q.width ? "None" : "";
            od()
        }
    }
    ;
    var c = new Date;
    p("copyright").innerHTML = "RUS" == la ? "&copy; 1997-" + c.getFullYear() + "  \u041d\u0438\u043a\u0430-\u0421\u043e\u0444\u0442 &trade;" : "&copy; 1997-" + c.getFullYear() + "  Nika-Soft &trade;";
    document.body.style.backgroundColor = sa;
    "\u043a\u043b\u0430\u0441\u0441\u044b" == NIKA.CLASSES_BTN.toLowerCase() && "RUS" == la ? $c("classes", Va, Wa, "classes_btn.png", "classes_hl.png") : "\u0433\u0440\u0443\u043f\u043f\u044b" == NIKA.CLASSES_BTN.toLowerCase() && "RUS" == la ? $c("classes", Va, Wa, "groups_btn.png", "groups_hl.png") : "classes" == NIKA.CLASSES_BTN.toLowerCase() ? $c("classes", Va, Wa, "classes_btn_eng.png", "classes_hl_eng.png") : ($c("classes", Va, Wa, "title_btn.png", "title_btnHL.png"),
    n.classes.caption = NIKA.CLASSES_BTN.substr(0, 8));
    "\u0443\u0447\u0438\u0442\u0435\u043b\u044f" == NIKA.TEACHERS_BTN.toLowerCase() && "RUS" == la ? $c("teachers", Va, Wa, "teachers_btn.png", "teachers_hl.png") : "teachers" == NIKA.TEACHERS_BTN.toLowerCase() ? $c("teachers", Va, Wa, "teachers_btn_eng.png", "teachers_hl_eng.png") : ($c("teachers", Va, Wa, "title_btn.png", "title_btnHL.png"),
    n.teachers.caption = NIKA.TEACHERS_BTN.substr(0, 13));
    $c("LeftScrll", 48, 48, "left_scroll.png", "left_scrollHL.png");
    $c("RightScrll", 48, 48, "right_scroll.png", "right_scrollHL.png");
    $c("UpScrll", 48, 48, "up_scroll.png", "up_scrollHL.png");
    $c("DownScrll", 48, 48, "down_scroll.png", "down_scrollHL.png");
    $c("NL", 86, 88, "nika.png", "nikaHL.png");
    n.NL.a = g;
    n.NL.x = 0;
    n.NL.y = 0;
    $c("NLs", 53, 54, "small_nika.png", "small_nikaHL.png");
    ad("school", ed(NIKA.SCHOOL_NAME), "300 18px Arial, sans-serif", "#FFFFFF", "left");
    ad("city", ed(NIKA.CITY_NAME), "300 18px Arial, sans-serif", "#FFFFFF", "left");
    ad("title", "", "RUS" == la ? "normal 55px RomanaScript" : "normal 65px AlexBrush", Ia, "center");
    ad("period", NIKA.PERIOD_STR, "normal 20px Arial, sans-serif", Mb, "center");
    ad("subject", "", "italic bold 24px Arial, sans-serif", Wc, "left");
    ad("exp_lab", NIKA.REFRESH_STR == f ? "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e" : NIKA.REFRESH_STR, "italic 28px Arial, sans-serif", "#FFFFFF", "center");
    ad("exp_dt", gd(), "italic 28px Arial, sans-serif", "#FFFFFF", "center");
    o.exp_lab.q = g;
    o.exp_dt.q = g;
    $c("back", 67, 68, "back.png", "backHL.png");
    $c("home", 67, 68, "home.png", "homeHL.png");
    $c("arrow_left", 68, 36, "arrow_left.png", "arrow_leftHL.png");
    $c("arrow_right", 67, 37, "arrow_right.png", "arrow_rightHL.png");
    $c("changes", 206, 206, "changes.png", "changesHL.png");
    ad("change_ln1", "" + (NIKA.CHANGES_STR == f ? "\u0417\u0430\u043c\u0435\u043d\u044b" : NIKA.CHANGES_STR), "normal 20px Arial, sans-serif", "#FFFFFF", "center");
    ad("change_ln2", "", "normal 20px Arial, sans-serif", "#FFFFFF", "center");
    o.change_ln1.q = g;
    o.change_ln2.q = g;
    ad("prev_week_ln1", "" + (NIKA.PREVIOUS_STR == f ? "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f" : NIKA.PREVIOUS_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("prev_week_ln2", "" + (NIKA.WEEK_STR == f ? "\u043d\u0435\u0434\u0435\u043b\u044f" : NIKA.WEEK_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("next_week_ln1", "" + (NIKA.NEXT_STR == f ? "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f" : NIKA.NEXT_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("next_week_ln2", "" + (NIKA.WEEK_STR == f ? "\u043d\u0435\u0434\u0435\u043b\u044f" : NIKA.WEEK_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("prev_month_ln1", "" + (NIKA.PREVIOUS2_STR == f ? "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439" : NIKA.PREVIOUS2_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("prev_month_ln2", "" + (NIKA.MONTH_STR == f ? "\u043c\u0435\u0441\u044f\u0446" : NIKA.MONTH_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("next_month_ln1", "" + (NIKA.NEXT2_STR == f ? "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439" : NIKA.NEXT2_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("next_month_ln2", "" + (NIKA.MONTH_STR == f ? "\u043c\u0435\u0441\u044f\u0446" : NIKA.MONTH_STR), "normal 16px Arial, sans-serif", sa, "left");
    ad("prev_day_ln2", NIKA.DAY_NUM_STR, "normal 16px Arial, sans-serif", sa, "left");
    ad("next_day_ln2", NIKA.DAY_NUM_STR, "normal 16px Arial, sans-serif", sa, "left");
    yb = window.NIKA.CLASS_EXCHANGE || 1 < window.NIKA.PERIODS.length || window.NIKA.A;
    NIKA.STRIKEOUT_FREE_LSN != f && (Cb = NIKA.STRIKEOUT_FREE_LSN);
    NIKA.SHOW_EXCHANGES_TERM != f && (Ab = NIKA.SHOW_EXCHANGES_TERM);
    NIKA.HOMEPAGE_BTN && NIKA.HOMEPAGE_URL ? (p("go_home").style.visibility = "visible",
    p("go_home").href = NIKA.HOMEPAGE_URL,
    p("go_home").innerHTML = NIKA.HOMEPAGE_BTN) : p("go_home").style.visibility = "hidden";
    for (var b in NIKA.SUBJECTS)
        NIKA.SUBJECTS[b].length > pc && (pc = NIKA.SUBJECTS[b].length);
    18 < pc && (mc = 800 + 14 * (pc - 18));
    for (b in NIKA.ROOMS)
        NIKA.ROOMS[b].length > qc && (qc = NIKA.ROOMS[b].length);
    28 < pc ? (Xb = 44 + 7 * pc,
    P = 20 + 7 * pc,
    128 > P && (P = 128),
    200 < P && (P = 200)) : (Xb = 264,
    P = 128);
    kb("home");
    wc = 0;
    window.setInterval(pd, 1E3);
    window.onresize()
}
window.requestAnimFrame = window.H || window.I || window.B || window.G || window.F || function(a) {
    window.setTimeout(a, 1E3 / 60)
}
;
function od() {
    if (q.getContext && W) {
        if (Qc) {
            var a = q.getContext("2d");
            if (Tc && 0 == Rc)
                a.fillStyle = "#0",
                a.fillRect(0, 0, q.width, q.height);
            else {
                a.shadowOffsetX = 0;
                a.shadowOffsetY = 0;
                a.lineWidth = 1;
                var c = fd();
                tabs[W].j(a, c);
                a.textBaseline = "alphabetic";
                for (var b in n)
                    if (n[b].a && (n[b].hasOwnProperty("caption") && (a.textAlign = "center",
                    n[b].hasOwnProperty("align") && (a.textAlign = n[b].align),
                    a.font = 7 > n[b].caption.length ? "800 42px Arial, sans-serif" : "800 40px Arial, sans-serif",
                    a.fillStyle = b == N ? fb : sa),
                    b == N ? a.drawImage(n[b].v, n[b].x, n[b].y, n[b].f, n[b].d) : a.drawImage(n[b].u, n[b].x, n[b].y, n[b].f, n[b].d),
                    n[b].hasOwnProperty("caption")))
                        a.save(),
                        a.setTransform(1 / c, 0, 0, 1.25 / c, n[b].x + n[b].f / 2, n[b].y + n[b].d / 2 + 22 - 5.5 * c),
                        a.fillText(n[b].caption, 0, 0),
                        a.restore();
                0 == ia && (a.font = o.school.font,
                ia = a.measureText(o.school.caption).width + 10,
                a.measureText(o.city.caption).width + 10 > ia && (ia = a.measureText(o.city.caption).width + 10),
                200 > ia && (ia = 200));
                for (var e in o)
                    o[e].a && (a.font = o[e].font,
                    a.textAlign = o[e].align,
                    a.fillStyle = o[e].color,
                    o[e].q ? (a.save(),
                    a.setTransform(1 / c, 0, 0, 1 / c, o[e].x, o[e].y),
                    a.fillText(o[e].caption, 0, 0),
                    a.restore()) : a.fillText(o[e].caption, o[e].x, o[e].y));
                a.save();
                a.beginPath();
                a.moveTo(w, r);
                a.lineTo(w + t, r);
                a.lineTo(w + t, r + v);
                a.lineTo(w, r + v);
                a.closePath();
                a.clip();
                a.translate(-m + w, -l + r);
                tabs[W].k(a);
                a.restore();
                if (wc)
                    5 == wc && !Yc && (Yc = new Date),
                    a.globalAlpha = wc / 5,
                    a.fillStyle = "#FFFFFF",
                    a.fillRect(w, r, t, v),
                    c = new Date,
                    30 < c.getTime() - Yc.getTime() && (wc--,
                    Yc = c),
                    wc || (Yc = null),
                    a.globalAlpha = 1;
                else if (!Gc && (C.x || C.y || E * Math.round(m / E) != m || D * Math.round(l / D) != l) ? nd() : Qc = i,
                0 < m && Ra & 1 && (a.save(),
                a.translate(w, r),
                c = a.createLinearGradient(0, 0, L, 0),
                c.addColorStop(0, Ic),
                c.addColorStop(1, Jc),
                a.fillStyle = c,
                a.fillRect(0, 0, L, v),
                a.restore()),
                m + t < x && Ra & 2 && (a.save(),
                a.translate(w, r),
                c = a.createLinearGradient(t - L, 0, t, 0),
                c.addColorStop(0, Jc),
                c.addColorStop(1, Ic),
                a.fillStyle = c,
                a.fillRect(t - L, 0, L, v),
                a.restore()),
                0 < l && Ra & 8 && (a.save(),
                a.translate(w, r),
                c = a.createLinearGradient(0, 0, 0, L),
                c.addColorStop(0, Ic),
                c.addColorStop(1, Jc),
                a.fillStyle = c,
                a.fillRect(0, 0, t, L),
                a.restore()),
                l + v < y && Ra & 4 && (a.save(),
                a.translate(w, r),
                c = a.createLinearGradient(0, v - L, 0, v),
                c.addColorStop(0, Jc),
                c.addColorStop(1, Ic),
                a.fillStyle = c,
                a.fillRect(0, v - L, t, L),
                a.restore()),
                Rc)
                    c = Tc ? Math.round(255 * (Sc - Rc) / Sc).toString(16) : Math.round(255 * Rc / Sc).toString(16),
                    1 == c.length && (c = "0" + c),
                    a.fillStyle = "#000000" + c,
                    a.fillRect(0, 0, q.width, q.height)
            }
        }
        requestAnimFrame(od)
    }
}
function nd() {
    Qc = g;
    0 < C.x && (m += Qa.x);
    0 > C.x && 0 < m && (m -= Qa.x);
    0 < C.y && (l += Qa.y);
    0 > C.y && 0 < l && (l -= Qa.y);
    !Gc && !C.x && E * Math.round(m / E) != m && (m = E * Math.round(m / E));
    !Gc && !C.y && D * Math.round(l / D) != l && (l = D * Math.round(l / D));
    0 < m ? n.LeftScrll.a = g : (n.LeftScrll.a = i,
    0 > C.x && ld());
    0 < l ? n.UpScrll.a = g : (n.UpScrll.a = i,
    0 > C.y && ld());
    m + t < x ? n.RightScrll.a = g : (n.RightScrll.a = i,
    0 < C.x && ld());
    l + v < y ? n.DownScrll.a = g : (n.DownScrll.a = i,
    0 < C.y && ld());
    0 < C.x && C.x--;
    0 > C.x && C.x++;
    0 < C.y && C.y--;
    0 > C.y && C.y++;
    !C.x && !C.y && Kc && (Ec = window.setTimeout(function() {
        md(Kc)
    }, 20))
}
function ld() {
    clearTimeout(Ec);
    Kc = "";
    Qc = g
}
function md(a) {
    Qc = g;
    switch (a) {
    case "LeftScrll":
        C.x -= Dc;
        break;
    case "RightScrll":
        C.x += Dc;
        break;
    case "UpScrll":
        C.y -= Dc;
        break;
    case "DownScrll":
        C.y += Dc;
        break;
    default:
        return
    }
    "" == Kc && (Ec = window.setTimeout(function() {
        md(Kc = a)
    }, 400),
    Qa = {
        x: Math.round(E / Dc),
        y: Math.round(D / Dc)
    })
}
function kb(a) {
    wc = 5;
    N = -1;
    W = a;
    HoldActive = Gc = i;
    C = {
        x: 0,
        y: 0
    };
    tabs[W].l();
    window.onresize();
    n.back.a = "home" != W;
    n.home.a = "home" != W;
    qd()
}
function qd() {
    if (window.schedule_check_url != f && window.initial_schedule_id != f) {
        if (Pc > Lc && "home" != W || Pc > Mc) {
            Pc = 0;
            var a = new XMLHttpRequest;
            a.onreadystatechange = function() {
                4 == this.readyState && 200 == this.status && initial_schedule_id != this.responseText && (location.href = location.href)
            }
            ;
            a.open("GET", schedule_check_url, g);
            a.send()
        }
        return g
    }
    return i
}
function pd() {
    Ga = Fa = Da = Ca = Ba = za = ya = "";
    Pc++;
    var a = new Date;
    Ea = ":" == Ea ? " " : ":";
    Da = Db(a.getHours()) + " " + Db(a.getMinutes());
    Fa = "" + a.getDate() + " " + NIKA.MONTHS2[Number(a.getMonth())].toLowerCase();
    Ga = "" + a.getFullYear() + " " + ("" + (NIKA.YEAR_STR == f ? "\u0433\u043e\u0434\u0430" : NIKA.YEAR_STR));
    var c, b, e, h = g, j;
    for (j in NIKA.LESSON_TIMES) {
        c = 60 * a.getHours() + a.getMinutes();
        b = 60 * Number(("" + NIKA.LESSON_TIMES[j][0]).split(":")[0]) + Number(("" + NIKA.LESSON_TIMES[j][0]).split(":")[1]);
        e = 60 * Number(("" + NIKA.LESSON_TIMES[j][1]).split(":")[0]) + Number(("" + NIKA.LESSON_TIMES[j][1]).split(":")[1]);
        if (c < b && (c > b - 15 && h || !h)) {
            a = "" + (b - c);
            ya = Number(j) + " " + NIKA.LESSON_STR;
            za = NIKA.FROM_STR == f ? "\u0447\u0435\u0440\u0435\u0437" : NIKA.FROM_STR;
            Ba = a;
            Ca = "RUS" == la ? "1" == a.charAt(a.length - 1) && 20 < a || 1 == a ? NIKA.MINUTES1 : "234".indexOf(a.charAt(a.length - 1)) + 1 && (10 > a || 20 < a) ? NIKA.MINUTES2 : Ca + NIKA.MINUTES3 : NIKA.MINUTES1;
            break
        } else if (c >= b && c <= e) {
            Ba = Number(j);
            "RUS" == la ? (za = NIKA.TIME_GO,
            Ca = NIKA.LESSON_STR) : "ENG" == la && (Ca = NIKA.TIME_GO,
            za = NIKA.LESSON_STR);
            break
        }
        if (c < b && h)
            break;
        h = i
    }
    Qc = g;
    Oc++;
    if (Oc > Nc) {
        Oc = 0;
        a: if (NIKA.TERM_WORK_PERIOD != f && (j = NIKA.TERM_WORK_PERIOD.split(";"),
        j != f)) {
            c = new Date;
            a = c.getDay() ? c.getDay() : 7;
            b = 60 * c.getHours() + c.getMinutes();
            for (d in j)
                if (h = j[d].match(/\d{2}:\d{2}/g),
                c = j[d].match(/=\d/),
                null != h && 2 == h.length && null != c && 1 == c.length && (c = c[0][1],
                e = 60 * Number(h[0][0] + h[0][1]) + Number(h[0][3] + h[0][4]),
                h = 60 * Number(h[1][0] + h[1][1]) + Number(h[1][3] + h[1][4]),
                c != f && c == a)) {
                    if (b >= e && b <= h) {
                        id(i);
                        break a
                    }
                    break
                }
            id(g)
        }
        jd(g);
        !Vc && !Tc && !qd() && (location.href = location.href);
        kb("home")
    }
}
;
