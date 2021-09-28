"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCacheErrors;

var React = _interopRequireWildcard(require("react"));

var _useForceUpdate = _interopRequireDefault(require("../../_util/hooks/useForceUpdate"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** Always debounce error to avoid [error -> null -> error] blink */
function useCacheErrors(errors, changeTrigger, directly) {
  var cacheRef = React.useRef({
    errors: errors,
    visible: !!errors.length
  });
  var forceUpdate = (0, _useForceUpdate["default"])();

  var update = function update() {
    var prevVisible = cacheRef.current.visible;
    var newVisible = !!errors.length;
    var prevErrors = cacheRef.current.errors;
    cacheRef.current.errors = errors;
    cacheRef.current.visible = newVisible;

    if (prevVisible !== newVisible) {
      changeTrigger(newVisible);
    } else if (prevErrors.length !== errors.length || prevErrors.some(function (prevErr, index) {
      return prevErr !== errors[index];
    })) {
      forceUpdate();
    }
  };

  React.useEffect(function () {
    if (!directly) {
      var timeout = setTimeout(update, 10);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [errors]);

  if (directly) {
    update();
  }

  return [cacheRef.current.visible, cacheRef.current.errors];
}