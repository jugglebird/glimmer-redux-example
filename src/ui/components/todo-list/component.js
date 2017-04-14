var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Component, { tracked } from "@glimmer/component";
import reduxStore from '../../../utils/store';
export default class TodoList extends Component {
    constructor(options) {
        super(options);
        this.state = {
            items: [],
            newItemText: ''
        };
        this.items = this.state.items;
        this.newItemText = this.state.newItemText;
        debugger;
        this.store = reduxStore();
        this.state = this.store.getState();
        this.store.subscribe(() => {
            this.state = this.store.getState();
            this.items = this.state.items;
            this.newItemText = this.state.newItemText;
        });
        this.items = this.state.items;
        this.newItemText = this.state.newItemText;
    }
    dispatchUpdateNewItemText(text) {
        this.store.dispatch({
            type: 'UPDATE_NEW_ITEM_TEXT',
            payload: text
        });
    }
    dispatchAddItem(item) {
        this.store.dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    }
    dispatchToggleItem(item) {
        this.store.dispatch({
            type: 'TOGGLE_ITEM',
            payload: item
        });
    }
    updateNewItemText(e) {
        this.dispatchUpdateNewItemText(e.target.value);
    }
    addItem() {
        if (!this.newItemText) {
            return false;
        }
        this.dispatchAddItem({
            text: this.newItemText,
            isDone: false
        });
    }
    toggleItem(toggledItem) {
        let items = this.items.map(item => {
            if (item.text === toggledItem.text) {
                return Object.assign(item, {
                    isDone: !item.isDone,
                });
            }
            else {
                return item;
            }
        });
        this.items = items;
    }
    deleteItem(removedItem) {
        let items = this.items.filter(item => {
            return item.text !== removedItem.text;
        });
        this.items = items;
    }
}
__decorate([
    tracked,
    __metadata("design:type", Object)
], TodoList.prototype, "state", void 0);
__decorate([
    tracked,
    __metadata("design:type", Object)
], TodoList.prototype, "items", void 0);
__decorate([
    tracked,
    __metadata("design:type", Object)
], TodoList.prototype, "newItemText", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFHOUMsTUFBTSxDQUFDLE9BQU8sZUFBZ0IsU0FBUSxTQUFTO0lBUTdDLFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFOUixVQUFLLEdBQUc7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFxQk8sVUFBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFqQjVDLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDNUMsQ0FBQztJQVVELHlCQUF5QixDQUFDLElBQUk7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbEIsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNsQixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2xCLElBQUksRUFBRSxhQUFhO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUlELGlCQUFpQixDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELE9BQU87UUFDTCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUFBLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVSxDQUFDLFdBQVc7UUFFcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNO2lCQUNyQixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVLENBQUMsV0FBVztRQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0NBRUY7QUF0RlU7SUFBUixPQUFPOzt1Q0FHTjtBQXFCTztJQUFSLE9BQU87O3VDQUEwQjtBQUN6QjtJQUFSLE9BQU87OzZDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQsIHsgdHJhY2tlZCB9IGZyb20gXCJAZ2xpbW1lci9jb21wb25lbnRcIjtcbmltcG9ydCByZWR1eFN0b3JlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3N0b3JlJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RvcmU6IGFueTtcblxuICBAdHJhY2tlZCBzdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgbmV3SXRlbVRleHQ6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICBkZWJ1Z2dlcjtcbiAgICB0aGlzLnN0b3JlID0gcmVkdXhTdG9yZSgpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xuICAgICAgdGhpcy5uZXdJdGVtVGV4dCA9IHRoaXMuc3RhdGUubmV3SXRlbVRleHQ7XG4gICAgfSk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XG4gICAgdGhpcy5uZXdJdGVtVGV4dCA9IHRoaXMuc3RhdGUubmV3SXRlbVRleHQ7XG4gIH1cblxuICAvLyBzdG9yZTogaW5qZWN0KCdzdG9yZScpXG4gIC8vIGRpc3BhdGNoOlxuXG4gIC8vIFN0YXRlIFNlbGVjdG9yc1xuICBAdHJhY2tlZCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XG4gIEB0cmFja2VkIG5ld0l0ZW1UZXh0ID0gdGhpcy5zdGF0ZS5uZXdJdGVtVGV4dDtcblxuICAvLyBBY3Rpb24gQ3JlYXRvcnNcbiAgZGlzcGF0Y2hVcGRhdGVOZXdJdGVtVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVVBEQVRFX05FV19JVEVNX1RFWFQnLFxuICAgICAgcGF5bG9hZDogdGV4dFxuICAgIH0pO1xuICB9XG5cbiAgZGlzcGF0Y2hBZGRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdBRERfSVRFTScsXG4gICAgICBwYXlsb2FkOiBpdGVtXG4gICAgfSk7XG4gIH1cblxuICBkaXNwYXRjaFRvZ2dsZUl0ZW0oaXRlbSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRV9JVEVNJyxcbiAgICAgIHBheWxvYWQ6IGl0ZW1cbiAgICB9KVxuICB9XG5cblxuICAvLyBDb21wb25lbnQgRnVuY3Rpb25zXG4gIHVwZGF0ZU5ld0l0ZW1UZXh0KGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlTmV3SXRlbVRleHQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBhZGRJdGVtKCkge1xuICAgIGlmICghdGhpcy5uZXdJdGVtVGV4dCkge3JldHVybiBmYWxzZX1cbiAgICB0aGlzLmRpc3BhdGNoQWRkSXRlbSh7XG4gICAgICB0ZXh0OiB0aGlzLm5ld0l0ZW1UZXh0LFxuICAgICAgaXNEb25lOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICB0b2dnbGVJdGVtKHRvZ2dsZWRJdGVtKSB7XG5cbiAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnRleHQgPT09IHRvZ2dsZWRJdGVtLnRleHQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgIGlzRG9uZTogIWl0ZW0uaXNEb25lLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICB9XG5cbiAgZGVsZXRlSXRlbShyZW1vdmVkSXRlbSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0udGV4dCAhPT0gcmVtb3ZlZEl0ZW0udGV4dDtcbiAgICB9KTtcblxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgfVxuXG59XG4iXX0=