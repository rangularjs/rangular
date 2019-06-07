import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AvatarComponent} from './avatar.component';
import {By} from '@angular/platform-browser';

describe('AvatarComponent', () => {
  let fixture: ComponentFixture<AvatarComponent>;
  let component: AvatarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();

    expect(component).toBeDefined();
  });

  it('should set default image', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('img')).nativeElement.src).toEqual(component.fallback);
  });

  it('should set src', () => {
    // tslint:disable-next-line:max-line-length
    const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACbVBMVEW+0OLz9PH8/Pv9/fz////m5+Lm5+JJme7m5+Lm5+I/lu9Jme3m5+Lm5+Lm5+I0k/Pm5+Lm5+IvkvTm5+KTtuyUtuzm5+Lm5+IpkfUqkfTm5+IlkPXm5+Lm5+ImkPXm5+IjkPXm5+Lm5+Lm5+Lm5+Icj/Ydj/YlkPXm5+Lm5+Lm5+IWjvcXjvcaj/Y7lPZJSEZKSUdLSUdLSkhMSkdMS0lNS0hQTElQT01RUE5YWFVbVE5cVU5cnfNelu1gl+xhWFFkl+tlmOtmW1JmW1NtbWpxcW54eHV7e3h9fXp9fXt+bV5/bl9/f3yBb1+Bb2CBgX6DrfCDrvCEhIGGcmKHc2OIiIWJiYaLi4iMjImNd2aNeGaNsu+Pj4uSe2iVfmqXf2ybgm2buu2cg26dnZmfhW+fn5ygoJ2gptWhp9Wih3Giop6jiHGjpKClpqKni3SnqKSojHSojHWpqaapqqasrKisramtkHetrqqvr6uvv+SwsKywsK2wv+OylHuyx+qzx+q2l3y2trK3l325mX65rsi5rsm6u7e7vLe7vLi8vbm9nIDCoYTCwr7Dw7/E0efFo4bIpojIyMTIycTJpYfJtLzKp4jKy8bLtbvLzMfOq4zPqovP0MzQ0czTrY3Vr4/V1tHV1tLYsZDZspHas5Hav6ja29bb3Nfb4OPg4dzh4t3iuZbi497i5OLj5N/j5eLk5ODk5uLlvqPlv6Pl2s7l5uHm5uDm5+LnvZnn4djn49zn5N3ovpno2Mno3dDo3dHp1MDp1cPp1cTp1sXqv5vqzrfqz7jrwJvrwZzrxqbryq7ry6/ry7DswZzswp/sw6ANYuKFAAAAK3RSTlMAAAAAAAYTFxobHiAqUltia3J4e4CAkpSYmr7Dy9DS3eLy8/T19/j5/P3+5IKiXgAAAudJREFUeAF91vdDmkcYwPEXFAQFBGlBEUTEgYA+1g477G7t3q0ddtTuvffeo03M3ntEY2KMSfSJSYyabcyZvyl4PJd7uXvj59fnvirve9xpFCtsbl8oEk+kUol4JORz29S5EjgD0TSapKMB5wKBK1xPCwd3jyKpD7uuEDiCSb5iyxeP3QTQ0fXeWkqSQYdV4Inx6dYX20DoWkZJzKMFdm8dH/16I5i9vhe5Oq+9MCjyN/PBB6B4chC5Zn+RObD7kfsaNN39mOe3mwJv/uevbgddxzf0O7wy8OT//v33gqUv6XN4ROCIIfcvqF5edQsAXLeRnpWDgiDmPQwFbn5jM2PrrweA52hBMB+4ksj1twHA09t/e+2phx59/v3fN51i874CgPZd9AZdPAhTvxgArtnGFMfuAoC/aUl4PnCK/fM9ALzENL8AwJtiXzlzQQDJhwCwQg/2XAvwDJJAsWGLmoIbDjPdIwD3IYnaDHcayXcADzILnwA8gCTtNnwoLAJ41Sr4D6AbBZ8Rwjz+WD+yCpYAvIVCyIjgZffDp1bBUoB/UIgYcRn8Be9aBf/Ti+PiRkIG++55wSr4EZ6VaxJGCqXld59julfaNsglKQrI5zuY5uztH6M5SKDJ6E49WPfZKEoJ8aHJcT04hGZx8ViFWaaYxQIR8eKE8TlWYG4cC4Roa0gThcGEMvaJzSdNMZMpZZh20/Y2m5brp1ERtckvkDQ5w7iZSVQF6CuqGLvAcs6PoareSYeA4uhF/oCOoCosjhnFGcadRkXSJQ8ys5OMnFAGQXlUmgx9e4CRgz8MoUnMYT6Mhb7OzK0rGbfmtkxnn5zUedTjPmekN5vJuePtP/94585MTrZ3BOVxr10ow49nNE8MaxeKvLJ6MhZ61CtLXoo/ZSz9rF2KdO0OtFoHrQPKtUscVzVYBw1Xaxc7Ka1q1Jc3VpUu8M9JSUVN1rw6W1NRQiMtIEZZeWV1bVNLS1NtdWV5mTa/BA2+Ge5cVLazAAAAAElFTkSuQmCC';
    component.src = img;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('img')).nativeElement.src).toEqual(img);
  });
});
