var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export default function reducer(state, { type, payload }) {
    switch (type) {
        case 'UPDATE_NEW_ITEM_TEXT':
            return __assign({}, state, { newItemText: payload });
        case 'ADD_ITEM':
            return __assign({}, state, { items: [
                    ...state.items,
                    payload
                ], newItemText: '' });
        case 'TOGGLE_ITEM':
            let items = [...state.items];
            items = items.map(item => {
                if (item.text === payload.text) {
                    return Object.assign(item, {
                        isDone: !item.isDone,
                    });
                }
                else {
                    return item;
                }
            });
            return __assign({}, state, { items: [
                    ...items
                ] });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFnQkEsTUFBTSxDQUFDLE9BQU8sa0JBQ1osS0FBWSxFQUNaLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBUztJQUV2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxzQkFBc0I7WUFDekIsTUFBTSxjQUNELEtBQUssSUFDUixXQUFXLEVBQUUsT0FBTyxJQUNwQjtRQUNKLEtBQUssVUFBVTtZQUNiLE1BQU0sY0FDRCxLQUFLLElBQ1IsS0FBSyxFQUFFO29CQUNMLEdBQUcsS0FBSyxDQUFDLEtBQUs7b0JBQ2QsT0FBTztpQkFDUixFQUNELFdBQVcsRUFBRSxFQUFFLElBQ2Y7UUFDSixLQUFLLGFBQWE7WUFDaEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUNyQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sY0FDRCxLQUFLLElBQ1IsS0FBSyxFQUFFO29CQUNMLEdBQUcsS0FBSztpQkFDVCxJQUNGO1FBQ0g7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEFjdGlvbiB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGl0ZW1zOiBBcnJheTxhbnk+O1xuICBuZXdJdGVtVGV4dD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFJlZHVjZXIge1xuICBzdGF0ZTogYW55O1xuICBhY3Rpb246IEFjdGlvbjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyPFJlZHVjZXI+KFxuICBzdGF0ZTogU3RhdGUsXG4gIHt0eXBlLCBwYXlsb2FkfTogQWN0aW9uXG4pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnVVBEQVRFX05FV19JVEVNX1RFWFQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5ld0l0ZW1UZXh0OiBwYXlsb2FkXG4gICAgICB9O1xuICAgIGNhc2UgJ0FERF9JVEVNJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxuICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgXSxcbiAgICAgICAgbmV3SXRlbVRleHQ6ICcnXG4gICAgICB9O1xuICAgIGNhc2UgJ1RPR0dMRV9JVEVNJzpcbiAgICAgIGxldCBpdGVtcyA9IFsuLi5zdGF0ZS5pdGVtc107XG4gICAgICBpdGVtcyA9IGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udGV4dCA9PT0gcGF5bG9hZC50ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgaXNEb25lOiAhaXRlbS5pc0RvbmUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgLi4uaXRlbXNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==