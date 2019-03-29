'undefined' != typeof window
  ? window
  : 'undefined' != typeof global
  ? global
  : 'undefined' != typeof self && self
var e = (function(e, r) {
  return e((r = { exports: {} }), r.exports), r.exports
})(function(e, r) {
  e.exports = (function() {
    var e = function(e) {
        return (
          (function(e) {
            return !!e && 'object' == typeof e
          })(e) &&
          !(function(e) {
            var t = Object.prototype.toString.call(e)
            return (
              '[object RegExp]' === t ||
              '[object Date]' === t ||
              (function(e) {
                return e.$$typeof === r
              })(e)
            )
          })(e)
        )
      },
      r =
        'function' == typeof Symbol && Symbol.for
          ? Symbol.for('react.element')
          : 60103
    function t(e, r) {
      return !1 !== r.clone && r.isMergeableObject(e)
        ? i(Array.isArray(e) ? [] : {}, e, r)
        : e
    }
    function n(e, r, n) {
      return e.concat(r).map(function(e) {
        return t(e, n)
      })
    }
    function o(e, r, n) {
      var o = {}
      return (
        n.isMergeableObject(e) &&
          Object.keys(e).forEach(function(r) {
            o[r] = t(e[r], n)
          }),
        Object.keys(r).forEach(function(u) {
          o[u] =
            n.isMergeableObject(r[u]) && e[u]
              ? (function(e, r) {
                  if (!r.customMerge) return i
                  var t = r.customMerge(e)
                  return 'function' == typeof t ? t : i
                })(u, n)(e[u], r[u], n)
              : t(r[u], n)
        }),
        o
      )
    }
    function i(r, i, u) {
      ;((u = u || {}).arrayMerge = u.arrayMerge || n),
        (u.isMergeableObject = u.isMergeableObject || e)
      var c = Array.isArray(i),
        a = Array.isArray(r),
        f = c === a
      return f ? (c ? u.arrayMerge(r, i, u) : o(r, i, u)) : t(i, u)
    }
    return (
      (i.all = function(e, r) {
        if (!Array.isArray(e))
          throw new Error('first argument should be an array')
        return e.reduce(function(e, t) {
          return i(e, t, r)
        }, {})
      }),
      i
    )
  })()
})
function r(e, r, t) {
  return void 0 ===
    (e = (r.split ? r.split('.') : r).reduce(function(e, r) {
      return e && e[r]
    }, e))
    ? t
    : e
}
module.exports = function(t, n, o) {
  function i(e, r, t) {
    try {
      return (t = r.getItem(e)) && void 0 !== t ? JSON.parse(t) : void 0
    } catch (e) {}
  }
  if (
    ((n = (t = t || {}).storage || (window && window.localStorage)),
    (o = t.key || 'vuex'),
    void 0 === t.persistChanges && (t.persistChanges = !0),
    void 0 === t.loadInitialState && (t.loadInitialState = !0),
    !(function(e) {
      try {
        return e.setItem('@@', 1), e.removeItem('@@'), !0
      } catch (e) {}
      return !1
    })(n))
  )
    throw new Error('Invalid storage instance given')
  return function(u) {
    if (t.loadInitialState) {
      var c = r(t, 'getState', i)(o, n)
      'object' == typeof c &&
        null !== c &&
        u.replaceState(
          e(u.state, c, {
            arrayMerge:
              t.arrayMerger ||
              function(e, r) {
                return r
              },
            clone: !1,
          })
        )
    }
    t.persistChanges &&
      (t.subscriber ||
        function(e) {
          return function(r) {
            return e.subscribe(r)
          }
        })(u)(function(e, i) {
        ;(t.filter ||
          function() {
            return !0
          })(e) &&
          (t.setState ||
            function(e, r, t) {
              return t.setItem(e, JSON.stringify(r))
            })(
            o,
            (t.reducer ||
              function(e, t) {
                return 0 === t.length
                  ? e
                  : t.reduce(function(t, n) {
                      return (function(e, r, t, n) {
                        return (
                          ((r = r.split ? r.split('.') : r)
                            .slice(0, -1)
                            .reduce(function(e, r) {
                              return (e[r] = e[r] || {})
                            }, e)[r.pop()] = t),
                          e
                        )
                      })(t, n, r(e, n))
                    }, {})
              })(i, t.paths || []),
            n
          )
      })
  }
}
//# sourceMappingURL=vuex-persistedstate.js.map
