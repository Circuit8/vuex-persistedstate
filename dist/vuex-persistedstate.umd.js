!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (e.createPersistedState = t())
})(this, function() {
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self
  var e,
    t = ((function(e, t) {
      e.exports = (function() {
        var e = function(e) {
            return (
              (function(e) {
                return !!e && 'object' == typeof e
              })(e) &&
              !(function(e) {
                var r = Object.prototype.toString.call(e)
                return (
                  '[object RegExp]' === r ||
                  '[object Date]' === r ||
                  (function(e) {
                    return e.$$typeof === t
                  })(e)
                )
              })(e)
            )
          },
          t =
            'function' == typeof Symbol && Symbol.for
              ? Symbol.for('react.element')
              : 60103
        function r(e, t) {
          return !1 !== t.clone && t.isMergeableObject(e)
            ? i(Array.isArray(e) ? [] : {}, e, t)
            : e
        }
        function n(e, t, n) {
          return e.concat(t).map(function(e) {
            return r(e, n)
          })
        }
        function o(e, t, n) {
          var o = {}
          return (
            n.isMergeableObject(e) &&
              Object.keys(e).forEach(function(t) {
                o[t] = r(e[t], n)
              }),
            Object.keys(t).forEach(function(u) {
              o[u] =
                n.isMergeableObject(t[u]) && e[u]
                  ? (function(e, t) {
                      if (!t.customMerge) return i
                      var r = t.customMerge(e)
                      return 'function' == typeof r ? r : i
                    })(u, n)(e[u], t[u], n)
                  : r(t[u], n)
            }),
            o
          )
        }
        function i(t, i, u) {
          ;((u = u || {}).arrayMerge = u.arrayMerge || n),
            (u.isMergeableObject = u.isMergeableObject || e)
          var c = Array.isArray(i),
            a = Array.isArray(t),
            f = c === a
          return f ? (c ? u.arrayMerge(t, i, u) : o(t, i, u)) : r(i, u)
        }
        return (
          (i.all = function(e, t) {
            if (!Array.isArray(e))
              throw new Error('first argument should be an array')
            return e.reduce(function(e, r) {
              return i(e, r, t)
            }, {})
          }),
          i
        )
      })()
    })((e = { exports: {} }), e.exports),
    e.exports)
  function r(e, t, r) {
    return void 0 ===
      (e = (t.split ? t.split('.') : t).reduce(function(e, t) {
        return e && e[t]
      }, e))
      ? r
      : e
  }
  return function(e, n, o) {
    function i(e, t, r) {
      try {
        return (r = t.getItem(e)) && void 0 !== r ? JSON.parse(r) : void 0
      } catch (e) {}
    }
    if (
      ((n = (e = e || {}).storage || (window && window.localStorage)),
      (o = e.key || 'vuex'),
      void 0 === e.persistChanges && (e.persistChanges = !0),
      void 0 === e.loadInitialState && (e.loadInitialState = !0),
      !(function(e) {
        try {
          return e.setItem('@@', 1), e.removeItem('@@'), !0
        } catch (e) {}
        return !1
      })(n))
    )
      throw new Error('Invalid storage instance given')
    return function(u) {
      if (e.loadInitialState) {
        var c = r(e, 'getState', i)(o, n)
        'object' == typeof c &&
          null !== c &&
          u.replaceState(
            t(u.state, c, {
              arrayMerge:
                e.arrayMerger ||
                function(e, t) {
                  return t
                },
              clone: !1,
            })
          )
      }
      e.persistChanges &&
        (e.subscriber ||
          function(e) {
            return function(t) {
              return e.subscribe(t)
            }
          })(u)(function(t, i) {
          ;(e.filter ||
            function() {
              return !0
            })(t) &&
            (e.setState ||
              function(e, t, r) {
                return r.setItem(e, JSON.stringify(t))
              })(
              o,
              (e.reducer ||
                function(e, t) {
                  return 0 === t.length
                    ? e
                    : t.reduce(function(t, n) {
                        return (function(e, t, r, n) {
                          return (
                            ((t = t.split ? t.split('.') : t)
                              .slice(0, -1)
                              .reduce(function(e, t) {
                                return (e[t] = e[t] || {})
                              }, e)[t.pop()] = r),
                            e
                          )
                        })(t, n, r(e, n))
                      }, {})
                })(i, e.paths || []),
              n
            )
        })
    }
  }
})
//# sourceMappingURL=vuex-persistedstate.umd.js.map
