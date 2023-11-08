/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
figma.showUI(__html__, { width: 1000, height: 600 });
function sendData(reqNode) {
    const node = reqNode ? extractProperties(reqNode) : null;
    figma.ui.postMessage({ type: 'nodes-arr', node });
}
function extractProperties(node) {
    if ('fills' in node) {
        const fillColorArr = [];
        const fills = node.fills;
        for (const fill of fills) {
            if ('color' in fill && fill.type === 'SOLID') {
                const r = Math.round(fill.color.r * 255);
                const g = Math.round(fill.color.g * 255);
                const b = Math.round(fill.color.b * 255);
                fillColorArr.push({ r, g, b });
            }
        }
        return fillColorArr;
    }
}
figma.on('selectionchange', () => {
    const nodes = figma.currentPage.selection;
    const node = nodes.length > 0 ? nodes[0] : null;
    if (node !== null) {
        sendData(node);
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLXBsdWdpbi8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDEwMDAsIGhlaWdodDogNjAwIH0pO1xuZnVuY3Rpb24gc2VuZERhdGEocmVxTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSByZXFOb2RlID8gZXh0cmFjdFByb3BlcnRpZXMocmVxTm9kZSkgOiBudWxsO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogJ25vZGVzLWFycicsIG5vZGUgfSk7XG59XG5mdW5jdGlvbiBleHRyYWN0UHJvcGVydGllcyhub2RlKSB7XG4gICAgaWYgKCdmaWxscycgaW4gbm9kZSkge1xuICAgICAgICBjb25zdCBmaWxsQ29sb3JBcnIgPSBbXTtcbiAgICAgICAgY29uc3QgZmlsbHMgPSBub2RlLmZpbGxzO1xuICAgICAgICBmb3IgKGNvbnN0IGZpbGwgb2YgZmlsbHMpIHtcbiAgICAgICAgICAgIGlmICgnY29sb3InIGluIGZpbGwgJiYgZmlsbC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IE1hdGgucm91bmQoZmlsbC5jb2xvci5yICogMjU1KTtcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gTWF0aC5yb3VuZChmaWxsLmNvbG9yLmcgKiAyNTUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBNYXRoLnJvdW5kKGZpbGwuY29sb3IuYiAqIDI1NSk7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yQXJyLnB1c2goeyByLCBnLCBiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWxsQ29sb3JBcnI7XG4gICAgfVxufVxuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBjb25zdCBub2RlID0gbm9kZXMubGVuZ3RoID4gMCA/IG5vZGVzWzBdIDogbnVsbDtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBzZW5kRGF0YShub2RlKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==