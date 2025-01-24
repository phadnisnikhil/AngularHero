import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLocalapiComponent } from './test-localapi.component';

describe('TestLocalapiComponent', () => {
  let component: TestLocalapiComponent;
  let fixture: ComponentFixture<TestLocalapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestLocalapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestLocalapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
