import {
  Component, ComponentFactoryResolver, ComponentRef,
  Input, OnDestroy,
  OnInit,
  ViewChild, ViewContainerRef,
} from '@angular/core';
import {RecentQueriesComponent} from "./recent-queries.component";
import {Metadata} from "../../../domain/meta-data-management/metadata";
import * as _ from 'lodash';

@Component({
  selector: 'explore-metadata-overview',
  templateUrl: './metadata-overview.component.html',
  entryComponents: [RecentQueriesComponent]
})
export class MetadataOverviewComponent implements OnInit, OnDestroy {

  @ViewChild('component_recent_queries', {read: ViewContainerRef}) entry: ViewContainerRef;

  entryRef: ComponentRef<RecentQueriesComponent>;

  @Input() readonly metadataId: string;
  @Input() readonly metadata : Metadata;

  public isShowMoreCatalogs: boolean = false;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  isDatasourceTypeMetadata(): boolean {
    return Metadata.isSourceTypeIsEngine(this.metadata.sourceType);
  }

  isDatabaseTypeMetadata(): boolean {
    return Metadata.isSourceTypeIsJdbc(this.metadata.sourceType);
  }

  isStagingTypeMetadata(): boolean {
    return Metadata.isSourceTypeIsStaging(this.metadata.sourceType);
  }

  isShowDashboardMoreContents(): boolean {
    // TODO dashborad 가 4건 이상
    return true;
  }

  isShowQueryMoreContents(): boolean {
// TODO query 가 4건 이상
    return true;
  }

  onClickSeeAllRecentDashboards(): void {

  }

  onClickSeeAllRecentQueries(): void {
    this.entryRef = this.entry.createComponent(this.resolver.resolveComponentFactory(RecentQueriesComponent));
    this.entryRef.instance.init();
  }
}


